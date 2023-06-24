import {BiddingDisplay} from './components/BiddingDisplay';
import {Header} from './components/Header';

export default function View() {
    return (
        <div className="grid h-screen place-items-center bg-background-white">
            <BiddingDisplay/>
        </div>
    );
}