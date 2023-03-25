import { useState } from "react";

type Props = { checkText: string }
function CheckBox(props: Props) {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    return (
        <>
            <label className="flex items-center gap-[12px] text-sm font-semibold text-black">
                <input
                    type="checkbox"
                    onChange={() => {
                        setIsChecked(!isChecked);
                    }}
                />
                <span
                    className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
                    aria-hidden="true"
                />
                {props.checkText}
            </label>
        </>
    );
}

export default CheckBox