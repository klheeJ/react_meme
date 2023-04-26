import Input from "./Input"
import { useForm } from 'react-hook-form'
import { server_calls } from '../api/server'
import { useDispatch, useStore } from 'react-redux'
import { chooseMeme_ID, chooseDesc, chooseYear } from '../redux/slices/RootSlice'

interface InventoryFormProps {
    id?: string[]
}

const MemeInventoryForm = (props: InventoryFormProps) => {
    const { register, handleSubmit } = useForm({});
    const dispatch = useDispatch();
    const store = useStore();

    const onSubmit = (data: any, event: any) => {
        console.log(`ID: ${props.id}`);
        console.log(props.id)
        console.log(data)
        if (props.id && props.id.length >0){
            server_calls.update(props.id[0], data)
            console.log(`Updated ${ data } & ${ props.id }`)
            setTimeout(()=> {window.location.reload()}, 1000);
            event.target.reset()
        } else {
            dispatch(chooseMeme_ID(data.meme_ID));
            dispatch(chooseDesc(data.desc));
            dispatch(chooseYear(data.year));

            server_calls.create(store.getState())
            setTimeout(() => {window.location.reload()}, 1000)
        }
    }

    return (

        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="meme_ID">Meme ID</label>
                    <Input {...register('meme_ID')} name="meme_ID" placeholder="Meme ID"/>
                </div>
                <div>
                    <label htmlFor="desc">Description</label>
                    <Input {...register('desc')} name="desc" placeholder="Description"/>
                </div>
                <div>
                    <label htmlFor="year">Year</label>
                    <Input {...register('year')} name="year" placeholder="Year"/>
                </div>
                <div className="flex p-1">
                    <button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default MemeInventoryForm