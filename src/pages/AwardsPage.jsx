import {Container, Row, Col} from 'react-bootstrap'
import sertif from '../assets/img/certificate.png'

const AwardsPage = () => {
  return (
    <div className='awards-page d-flex align-items-center'>
        <Container>
            <Row className='sertif-box'>
                <Col lg='6' className='pt-4'>
                    <h1 className='rounded-4 animate__animated animate__fadeInUp animate__delay-1s'>Awards</h1>
                    <div className='icon pt-5'>
                        <ol className='animate__animated animate__fadeInRight animate__delay-1s'><i className='fa fa-envelope-open aria-hidden=true'></i> Pelatihan VSGA G5 JGD Bpptik</ol>
                        <ol className='animate__animated animate__fadeInLeft animate__delay-1s'><i className='fa fa-id-card' aria-hidden='true'></i> Pelatihan Python Online</ol>
                    </div>
                </Col>
                <Col lg='6'>
                    <img src={sertif} alt="icon-sertif" className='animate__animated animate__fadeInUp ' />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default AwardsPage