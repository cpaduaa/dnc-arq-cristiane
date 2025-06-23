import { useContext, useState, useEffect } from "react";
import './ContactForm.css';

//COMPONENTS
import Button from '../Button/Button'

// CONTEXT
import { AppContext } from '../../Contexts/AppContext';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isFormValid, setIsFormValid] = useState(false)
    const [FormSubmitLoading, setFormSubmitLoading] = useState(false)
    const [FormSubmitted, setFormSubmitted] = useState(false)
    const appContext = useContext(AppContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (isFormValid) {
            setFormSubmitLoading(true)
            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({...formData, access_key: "507e2352-6837-474a-9d7f-1f90df913f8f"})
                })
                if (response.ok) {
                    setFormSubmitted(true)
                } else {
                    alert('Erro ao enviar!')
                }
            } catch (e) {
                alert('Error: ', e)
            } finally {
                setFormSubmitLoading(false)
            }

        }
    }

    useEffect(() => {
        const isValidEmail = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            return emailRegex.test(email)
        }
        const isValid = formData.name.trim() && 
        formData.email.trim() && 
        isValidEmail(formData.email) &&
        formData.message.trim()

        setIsFormValid(isValid)
    }, [formData])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });    
    }

    return (
        <div className="contact-form d-flex df-column al-center">
            <h2>We love meeting new people and helping them.</h2>
            <form onSubmit={handleSubmit}>
                <div className="d-flex form-group">
                    <input
                       className="form-input"
                        type="text" 
                        id="name"
                        name="name"
                        placeholder="Name *"
                        onChange={handleChange}                        
                    />
                    <input
                       className="form-input"
                        type="email" 
                        id="email"
                        name="email"
                        placeholder="Email *"
                        onChange={handleChange}                         
                    />
                </div>
                <div className="d-flex form-group">
                    <textarea 
                        className="form-input"
                        id="message"
                        name="message"
                        placeholder="Message *"
                        onChange={handleChange} 
                        rows="4"
                    ></textarea>
                </div>
                <div className="al-center d-flex jc-end form-group">
                    {FormSubmitted && <p className="text-primary">Sucesso</p>}
                    <Button type="submit" buttonStyle="secondary" disabled={!isFormValid || FormSubmitLoading} >
                        Enviar
                    </Button> 
                </div>
            </form>
        </div>
    )
}

export default ContactForm;
