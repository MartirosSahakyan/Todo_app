export function Input({onChange, value}) {
    return(
        <input 
        type='text'
        onChange={onChange} 
        value={value}
        />
    )
}