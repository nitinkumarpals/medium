interface LabeledInputType {
    label: string;
    type?: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export function LabeledInput ({label, placeholder, type, onChange}: LabeledInputType)  {
    return (
        <div>
            <label className="block mb-2 text-sm font-semibold text-black pt-6">{label}</label>
            <input onChange={onChange} type={type || "text"} id="first_name" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 ring-gray-400 focus:border-gray-600 block w-full p-2.5" placeholder={placeholder} required />
        </div>
    )
}

