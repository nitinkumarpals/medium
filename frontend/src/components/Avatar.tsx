export const Avatar = ({name, size = 'small'}: {name: string, size?: 'big' | 'small'}) => {
    return (
        <div>

            <div className={`relative inline-flex items-center justify-center  overflow-hidden bg-gray-200 rounded-full ${size === 'small' ? 'w-6 h-6' : 'w-9 h-9'}`}>
                <span className={ `${size === 'small' ? 'text-xs' : 'text-md'} font-extralight text-gray-600 `}>{name[0].toUpperCase()}</span>
            </div>

        </div>
    )
}


