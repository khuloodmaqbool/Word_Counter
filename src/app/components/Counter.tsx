import { useState, useEffect } from "react";

export const Counter = () => {
    const [textareaVal, setTextareaVal] = useState<string>("");
    const [countWords, setCountWords] = useState<number>(0);

    useEffect(() => {
        const trimmedValue = textareaVal.trim();
        const splitCount = trimmedValue.split(/\s+/);
        const count = splitCount.filter((word) => word).length;
        setCountWords(count);
    }, [textareaVal]);

    return (
        <>
            <div className="w-4/5 md:w-96 lg:w-96 shadow-lg bg-white p-4 rounded-xl" >
                <h1 style={{ fontFamily: "Dm Sans" }} className="text-3xl mb-3">Text Analysis</h1>
                <p className="text-slate-600" >Enter text and see the word and character count.</p>
                <textarea placeholder="Enter Your Text Here"
                    className="w-full my-3 h-24 border border-slate-200 rounded-lg p-3"
                    value={textareaVal}
                    onChange={(event) => setTextareaVal(event.target.value)}
                ></textarea>
                <div className="flex justify-between w-full">
                    <p>{countWords} Word , {textareaVal.length} Count</p>
                    <button className="bg-blue_color text-white px-4 py-2 rounded-lg" onClick={() => setTextareaVal("")} >Clear</button>
                </div>
            </div>
        </>
    );
};
