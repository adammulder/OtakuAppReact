import Drawer from "./Drawer";
import { useState } from 'react'
import { server_calls } from "../api/server";
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { useGetData } from "../custom-hooks/FetchData";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import cover from '../assets/images/dashcover.jpg'
import { useTranslation } from "react-i18next";

const columns: GridColDef[]= [
    {field: 'id', headerName: "ID", width:90, hideable:true },
    {field: 'anime', headerName: 'Anime', flex:1},
    {field: 'fav_char', headerName: 'Fav_char', flex:1},
    {field: 'ep_watched', headerName: 'Ep_watched', flex:1},
    {field: 'rating', headerName: 'Rating', flex:2}
]



function DataTable() {
    const [open, setOpen] = useState(false);
    const { contactData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ]= useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose= () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => {window.location.reload()},500)
    }
    const { t, i18n } = useTranslation()

  return (

    <div>
   
    <div className='bg-gradient-to-tl from-[#bde0fe] to-[#ffc8dd]
            h-[100vh] w-full fixed -z-10'>
        <img src={cover} className="w-screen h-[100vh] object-cover absolute mix-blend-overlay -z-10"/>
        <Drawer
            id={selectionModel}
            
         />
        
        <div className={ open ? "hidden": "container mx-10 my-5 flex flex-col bg-white"}
            style={{ height:400, width: '100%' }}>
            <h2 className="p-3 bg-[#CDB4DB] my-2 rounded text-white text-xl">{t('favanime')}</h2>
            <DataGrid rows={contactData} columns={columns} pageSizeOptions={[5]}
            checkboxSelection={true}
            onRowSelectionModelChange={ (item:any) =>{
                setSelectionModel(item)
            }}
            />
        </div>
        <button onClick={deleteData} className="p-3 bg-[#ffafcc] rounded m-3 hover:bg-[#a2d2ff] hover:text-white">{t('delete')}</button>
        <h1 className="p-10 text-5xl font-bold">{t('rec')}</h1>
    </div>
    </div>
  )
}
export default withAuthenticationRequired(DataTable)