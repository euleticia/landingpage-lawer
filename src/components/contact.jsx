import { useState } from 'react'


export const Contact = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Entre em contato</h2>
                <p>
                  Preencha o formulário e entrarei em contato através do e-mail.
                </p>
              </div>
              <form
                action="https://formsubmit.co/zineidematos@hotmail.com"
                method="POST"
              >
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        value={formData.name}
                        className='form-control'
                        placeholder='Nome'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        value={formData.email}
                        name='email'
                        className='form-control'
                        placeholder='E-mail'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    value={formData.message}
                    rows='4'
                    placeholder='Mensagem'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Envie uma mensagem
                </button>
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Informações de Contato</h3>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Phone
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
            <a
                  href='https://wa.me/message/NPGY5LW5PPCNO1'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Fale pelo Whatsapp
                </a>{' '}
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href='https://www.facebook.com/people/Zineide-Matos-Advogada/61550472147220/?mibextid=ZbWKwL'>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href='https://www.instagram.com/zineidematosadv/?igsh=MTlrd3FnNHptbGNpZw%3D%3D'>
                      <i className='fa fa-instagram'></i>
                    </a>
                  </li>
                  <li>
                    <a href='https://wa.me/message/NPGY5LW5PPCNO1'>
                      <i className='fa fa-whatsapp'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
