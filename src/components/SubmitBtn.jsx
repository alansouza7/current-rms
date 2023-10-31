import { useNavigation } from "react-router-dom"


const SubmitBtn = ({text}) => {

    const navigation = useNavigation()
    const isSubmitting = navigation.state = ""

  return (
    <div>
      <button disabled={isSubmitting} type="submit" className="btn btn-primary btn-block">
        {isSubmitting? <span className="loading loading-spinner">sending...</span>: <span>{text}</span>}

      </button>
    </div>
  )
}

export default SubmitBtn
