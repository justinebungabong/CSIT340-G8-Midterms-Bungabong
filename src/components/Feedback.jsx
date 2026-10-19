import { useState } from "react";
function Feedback() {
    const [yesFeedback, setYesFeedback] = useState(0);
    const [noFeedback, setNoFeedback] = useState(0);

    function handleYes() {
        setYesFeedback(yesFeedback + 1);
    }

    function spaceMaker() {
        return " ";
    }

    function handleNo() {
        setNoFeedback(noFeedback + 1);
    }

    function handleClear() {
        setYesFeedback(0);
        setNoFeedback(0);
    }

    return (
        <div className="mx-20 mt-2 flex items-center justify-between self-start rounded-x1 bg-[#5C4F4A] p-6 text-[#EDE9E6]">
            <div className="flex items-center gap-4">
                <p className="text-2x1">Was this page helpful?</p>
                <button className="cursor-pointer rounded-lg bg-[#5C766D] px-6 py-2 text-xl font-bold" onClick={handleYes}>Yes</button>
                <button className="cursor-pointer rounded-lg bg-[#C9996B] px-6 py-2 text-xl font-bold text-[#5C4F4A]" onClick={handleNo}>No</button>
                <button className="cursor-pointer rounded-lg border-2 border-[#EDE9E6] px-6 py-2 text-xl font-bold" onClick={handleClear}>Clear</button>
            </div>
            <div/>
            <p className="text-2x1">
                <span className="font-bold" yesFeedback={yesFeedback}>
                    {yesFeedback} 
                </span>
                {spaceMaker()} out of {spaceMaker()}
                <span className="font-bold" noFeedback={yesFeedback + noFeedback}>
                    {yesFeedback + noFeedback}
                </span>
                {spaceMaker()} found this helpful
            </p>
        </div>
    );
}

export default Feedback;