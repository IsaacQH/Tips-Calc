
const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

  type TippercentageProp = {
    setTip: React.Dispatch<React.SetStateAction<number>>
    tip: number
  }

export const TipsPercentage = ({setTip, tip}:TippercentageProp) => {
  return (
    <div>
        <h3 className="font-black text-2xl mb-3">Tip: </h3>

        <form>
            {tipOptions.map((tipOption) => (
                <div key ={tipOption.id} className="flex gap-2">
                    <label htmlFor={tipOption.id}>{tipOption.label}</label>
                    <input 
                        type="radio"
                        name="tip" 
                        id={tipOption.id}
                        value={tipOption.value}
                        onChange={e => setTip(Number(e.target.value))}
                        checked = {tipOption.value === tip}
                    />
                </div>
            ))}


        </form>
    </div>
  )
}
