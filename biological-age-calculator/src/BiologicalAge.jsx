import { useState } from "react";
import Input from "./Input";
import { ageResult } from "./calculation";
import Results from "./Results";

const BiologicalAge = () => {
  const [formdata, setFormData] = useState(
    {Albumin: "",
    Creatinine: "",
    Glucose: "",
    CreacProtein: "",
    Lympocyte: "",
    MeanCellVolume: "",
    RedCellDistWidth: "",
    AlkalinePhosphatase: "",
    WhiteBloodCells: "",
    Age: "",
  }
  )
  const [bioage, setBioage] = useState(0);
  const [open,setOpen] = useState(false);
  const handleSubmit  = (e) => {
    e.preventDefault()
    const bio = ageResult(formdata);
    setBioage(bio);
    handleClickOpen();
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
   <form
   onSubmit={handleSubmit}
   className='mt-10 w-full max-w-2xl flex flex-col gap-5 glass-container !py-10 mb-20 sm:mb-0'
>
   <Input label={"Albumin"} range= {"3.2 - 5.2"} unit={"g/dL"} onChange={(e)=> setFormData({...formdata, Albumin: e.target.value})} />
   <Input  label={"Creatinine"} range={"0.7 - 1.5"} unit={"mg/dL"} onChange={(e)=> setFormData({...formdata, Creatinine: e.target.value})} />
   <Input label={"Glucose"} range={"75 - 100"} unit={"mg/dL"} onChange={(e)=> setFormData({...formdata, Glucose: e.target.value})} />
   <Input label={"CreacProtein"} range={"0 - 2.9"} unit={"mg/L"} onChange={(e)=> setFormData({...formdata, CreacProtein: e.target.value})} />
   <Input label={"Lympocyte"} range={"20 - 40"} unit={" %"} onChange={(e)=> setFormData({...formdata, Lympocyte: e.target.value})} />
   <Input label={"MeanCellVolume"} range={"83 - 101"} unit={" fL"} onChange={(e)=> setFormData({...formdata, MeanCellVolume: e.target.value})} />
   <Input label={"RedCellDistWidth"} range={"11.6 - 14"} unit={" %"} onChange={(e)=> setFormData({...formdata, RedCellDistWidth: e.target.value})} />
   <Input label={"AlkalinePhosphatase"} range={"45 - 129"} unit={" U/L"} onChange={(e)=> setFormData({...formdata, AlkalinePhosphatase: e.target.value})} />
   <Input label={"WhiteBloodCells"} range={"4 - 10"} unit={"10^3 cells/mL"} onChange={(e)=> setFormData({...formdata, WhiteBloodCells: e.target.value})} />
   <Input label={"Age"} unit={"years"} onChange={(e)=> setFormData({...formdata, Age: e.target.value})} />
   <div className="flex justify-center">
    <button onClick={() => ageResult(formdata)} className="px-5 py-2 text-sm bg-primary-orange rounded-full text-white">
      Submit
    </button>
   </div>
</form>
{open && <Results open={open} handleClose={handleClose} data={{realage: formdata.Age,bioage: bioage}} />}
</div>
  );
};

export default BiologicalAge;
