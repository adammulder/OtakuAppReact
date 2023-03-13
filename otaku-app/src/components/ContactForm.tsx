import Input from "./Input"
import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseAnime, chooseFav_char, chooseEp_watched, chooseRating } from "../redux/Slices/RootSlices"



interface ContactFormProps {
    id?: string[]
    
}

const ContactForm = (props: ContactFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
        server_calls.update(props.id[0], data)
        console.log(`Updated: ${data.name} ${props.id}`)
        setTimeout(() => {window.location.reload()}, 1000);
        event.target.reset()
    } else {
        // Use dispatch to update our state in our store
        dispatch(chooseAnime(data.anime));
        dispatch(chooseFav_char(data.fav_char));
        dispatch(chooseEp_watched(data.ep_watched));
        dispatch(chooseRating(data.rating));

        server_calls.create(store.getState())
        setTimeout(() => {window.location.reload()},1000)
    }
  }

  return (

    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label className="p-4" htmlFor="anime"></label>
                <Input {...register('anime')} name='anime' placeholder="Anime" label="Anime" />
            </div>
            <div>
                <label className="p-4" htmlFor="fav_char"></label>
                <Input {...register('fav_char')} name='fav_char' placeholder="Fav_char" label="Fav_char"/>
            </div>
            <div>
                <label className="p-4" htmlFor="ep_watched"></label>
                <Input {...register('ep_watched')} name='ep_watched' placeholder="Ep_watched" label="Ep_watched"/>
            </div>
            <div>
                <label className="p-4" htmlFor="rating"></label>
                <Input {...register('rating')} name='rating' placeholder="Rating" label="Rating"/>
            </div>
            <div className="flex p-1">
                <button
                className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white">
                    Submit
                </button>
            </div>
        </form>
    </div>
  )
}

export default ContactForm