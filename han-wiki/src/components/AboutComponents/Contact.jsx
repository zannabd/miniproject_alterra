import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const StyledContact = styled.div`
  background-color: #38096c;
  color: #fff;

  .row-contact {
    display: flex;
    flex-direction: column;
  }
  input,
  textarea {
    background-color: #d9d9d9;
    border: 2px solid #5800ba;
  }
  #contsctUs {
    flex-basis: 50%;
    flex-shrink: 1;
    align-self: center;
    margin-top: 1rem;
  }
  #formInput {
    margin: 0.5rem;
    flex-basis: 80%;
    align-self: center;
  }

  .button {
    background-color: #64007b;
    padding: 0.5rem;
    color: #fff;
    border: none;
    border-radius: 8px;
  }
  .button:hover {
    border: 2px solid #cf00ff;
  }
  @media screen and (min-width: 768px) {
    #formInput {
      margin: 2rem;
      flex-basis: 50%;
      align-self: center;
    }
  }

  @media screen and (min-width: 992px) {
    #formInput {
      margin: 2rem;
      flex-basis: 50%;
      align-self: center;
    }
    .row-contact {
      display: flex;
      flex-direction: row;
    }
  }
`;

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Input yang Anda Kirim : \n First Name    : ${formData.firstName} \n Last Name    :   ${formData.lastName} \n Email            :   ${formData.email}  \n Message       :  ${formData.message}`);

    // Membersihkan data di form setelah proses pengiriman berhasil
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  }
  return (
    <StyledContact>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0D004F"
          d="M0 192l24-5.3c24-5.7 72-15.7 120-48C192 107 240 53 288 80s96 133 144 165.3c48 31.7 96-10.3 144-48C624 160 672 128 720 144s96 80 144 101.3c48 21.7 96-.3 144-16 48-16.3 96-26.3 144-10.6 48 16.3 96 58.3 144 74.6 48 15.7 96 5.7 120 0l24-5.3V0H0z"
        ></path>
      </svg>
      <Container>
        <div className="container py-5" id="contact">
          <div className="container-fluid p-5">
            <div className="row-contact">
              <div id="contactUs">
                <h1 className="fs-1 fw-bold">Contact Us</h1>
                <p>Hubungi kami untuk mendapatkan informasi menarik lainnya</p>
              </div>
              <div id="formInput">
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col>
                      <label htmlFor="name" className="form-label">
                        First Name :
                      </label>
                      <input type="text" className="form-control border-2" name="firstName" id="lastname" value={formData.firstName} onChange={handleInputChange} />
                    </Col>
                    <Col>
                      <label htmlFor="lastname" className="form-label">
                        Last Name :
                      </label>
                      <input type="text" className="form-control border-2" name="lastName" id="lastname" value={formData.lastName} onChange={handleInputChange} />
                    </Col>
                  </Row>
                  <div>
                    <label htmlFor="email" className="form-label">
                      Email :
                    </label>
                    <input type="email" className="form-control border-2" name="email" id="email" value={formData.email} onChange={handleInputChange} />
                  </div>
                  <div>
                    <label htmlFor="message" className="form-label">
                      Message :
                    </label>
                    <textarea className="form-control border-2" name="message" id="message" rows={3} value={formData.message} onChange={handleInputChange} />
                  </div>
                  <div className="d-grid gap-2 col-8 mx-auto mt-3">
                    <button type="submit" className="button">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </StyledContact>
  );
}
