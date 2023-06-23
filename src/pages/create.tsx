import { CreateForm } from './components/Forms';

export default function Create() {
    return (
        <div className="grid h-screen place-items-center bg-background-white">
            <div className=" flex rounded-md w-[500px] bg-background-white shadow-outer px-8 py-5">
                <CreateForm/>
            </div>
        </div>
    );
}