import React , {ChangeEvent, FormEvent, useState, useEffect} from 'react'

interface Props {

}

const FormData:React.FC<Props> = ({}) => {
  

  const [name, setName] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("name",name);
};

const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
};

const onAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
};

  return (
    <div>
         <form  onSubmit={handleSubmit}>
            
                <input type="text" placeholder="name" value={name} onChange={onNameChange}/>
                <input type="text" placeholder="address" value={address} onChange={onAddressChange} />
                <button type="submit"> Submit </button>
          
        </form>
    </div>
  )
}

export default FormData
