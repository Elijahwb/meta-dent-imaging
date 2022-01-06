import React,  {useState} from 'react';
import { outputFileInformation } from '../../components/tests/Fileloader'

function Fileloader(props) {

  const [label, setLabel] = useState('File information...')

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      <div className='text-sm font-bold'>Select DICOM file:</div>
      
      <input className='text-sm bg-orange-600 my-2' name="dicomFile" type="file" multiple onChange={outputFileInformation}/>

      <textarea className='border-2 border-orange-600' readOnly defaultValue={label} name="fileInformation"></textarea>
    </div>
  );
}

export default Fileloader;