
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
  }

export const TipsPercentage = ({setTip}:TippercentageProp) => {
  return (
    <div>
        <h3 className="font-black text-2xl mb-3">Tip: </h3>

        <form>
            {tipOptions.map((tip) => (
                <div key ={tip.id} className="flex gap-2">
                    <label htmlFor={tip.id}>{tip.label}</label>
                    <input 
                        type="radio"
                        name="tip" 
                        id={tip.id}
                        value={tip.value}
                        onChange={e => setTip(Number(e.target.value))}
                    />
                </div>
            ))}


        </form>
    </div>
  )
}
