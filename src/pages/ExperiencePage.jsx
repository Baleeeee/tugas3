import {Container, Row, Col} from 'react-bootstrap'

const ExperiencePage = () => {
return (
<div className='experience-page w-100 d-flex align-items-center overflow-hidden'>
    <Container>
        <Row className='header-box'>
            <Col className='align-items-center' lg='6'>
            <h2 className=' pt-2 rounded-4 animate__animated animate__fadeInUp'>
                Operator Gudang
            </h2>
            <h4 className='mb-4 ps-3 animate__animated animate__fadeInUp animate__delay-1s'>PT Hero Supermarket tbk</h4>
            <p className='mb-4 ps-3 animate__animated animate__fadeInUp animate__delay-1s'>
                melakukan Pkl di salah satu supermarket pada bagian Gudang. </p>
            </Col>

            <Col className='masa pt-5' >
                <p className='fw-bold animate__animated animate__fadeInUp animate__delay-1s'>mulai dari Juli 2018 - Oktober 2018</p>
            </Col>
        </Row>

        <Row className='header-box2 pt-5'>
            <Col className='align-items-center' lg='6'>
                <h2 className=' pt-2 rounded-4 animate__animated animate__fadeInUp animate__delay-1s'>
                Admin It Support
                </h2>
            <h4 className='mb-4 ps-3 animate__animated animate__fadeInUp animate__delay-1s'>PT Kalbe Farma tbk</h4>
            <p className='mb-4 ps-3 animate__animated animate__fadeInUp animate__delay-1s'>
                melakukan Pkl di salah satu supermarket pada bagian It Support, yang memiliki jobdesk seperti membantu troubleshooting, melakukan penginstalan software, membantu masalah jaringan dan sebagainya. </p>
            </Col>

            <Col className='masa pt-5 ' >
                <p className='fw-bold animate__animated animate__fadeInUp animate__delay-1s'>mulai dari Januari 2019 - April 2019</p>
            </Col>
        </Row>
    </Container>
</div>
)
}

export default ExperiencePage