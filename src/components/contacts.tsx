import React, {useState} from 'react';
import Button from "./ui/button";

const Contacts: React.FC = () => {
    const [formData, setFormData] = useState({
        userName: "",
        email: "",
        message: "",
    });
    const [error, setError] = useState<Partial<{ userName: string, email: string }>>({});

    const validate = () => {
        let isValid = true;
        const errorConfig = { ...error };

        if (formData.userName === '') {
            isValid = false;
            errorConfig.userName = 'Name is required';
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailPattern.test(formData.email)) {
            isValid = false;
            errorConfig.email = 'Invalid email address';
        }

        setError(errorConfig);
        return isValid;
    };


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleForm =  async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (validate()) {
            await fetch('https://formspree.io/f/xpzgbeod', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
                .then((res) => console.log('Okay',res))
                .catch((err) => console.log('something went wrong', err))
            setFormData({
                userName: '',
                email: '',
                message: ''
            });
        }
    };


    return (
        <section id={'contacts'} className={'section-contacts'}>
            <div className={'contacts-first'}>
                <h2 className={'contacts-first-title'}>Contacts</h2>
                <p className={'contacts-first-content'}>I would love to hear about your project and how I <br /> could help. Please fill in the form, and I’ll <br /> get back to you as soon as possible.</p>
            </div>
            <form onSubmit={handleForm} className={'contacts-second'}>
                <div className={'input-wrapper'}>
                    <input
                        autoComplete='off'
                        value={formData.userName}
                        onChange={handleChange}
                        name={'userName'}
                        placeholder={'NAME'}
                        className={`contacts-second-input ${error.userName ? 'error-border' : ''}`}
                        type={'text'}
                    />
                    {error.userName && <div className={'error'}>{error.userName}</div>}
                </div>
                <div className={'input-wrapper'}>
                    <input
                        autoComplete='off'
                        value={formData.email}
                        onChange={handleChange}
                        name={'email'}
                        placeholder={'EMAIL'}
                        className={`contacts-second-input ${error.email ? 'error-border' : ''}`}
                        type={'text'}
                    />
                    {error.email && <div className={'error'}>{error.email}</div>}
                </div>
                <div className={'input-wrapper'}>
                    <textarea
                        autoComplete='off'
                        value={formData.message}
                        onChange={handleChange}
                        name={'message'}
                        placeholder={'MESSAGE'}
                        className={'contacts-second-textarea'}
                    />
                </div>
                <Button align={'end'} margin={'32px'} text={'SEND MESSAGE'} />
            </form>
        </section>
    )
};

export default Contacts;
