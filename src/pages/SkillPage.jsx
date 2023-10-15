import {Container, Row, Col} from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar';
import skillimg from '../assets/img/skill.png'
import { semuaSkill } from '../data/index';

const SkillPage = () => {

return (
<div className='skill-page w-100 min-vh-100 d-flex align-items-center overflow-hidden'>
    <Container>
        
        <Row className='skill-box d-flex align-items-center'>

            <Col lg='6' className=' pe-5 pt-lg-0 pt-5'>
                <img src={skillimg} alt="icon-skill" className='animate__animated animate__fadeInUp' />
            </Col>

            <Col className='box2'>
            <h1 className=' py-1 text-center rounded-4 animate__animated animate__fadeInUp animate__delay-1s'>Skill</h1>
                <p className='animate__animated animate__fadeInUp animate__delay-1s'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non accusantium tenetur beatae omnis, itaque
                commodi quia exercitationem ipsum ratione cupiditate expedita consectetur praesentium mollitia et sed,
                amet animi rem cum!</p>
            {semuaSkill.map((skill) =>{
            return <Col key={skill.id} className='box3 ps-3'>
            <p className='animate__animated animate__fadeInUp animate__delay-1s'>{skill.desc}</p>
             <ProgressBar className='asal animate__animated animate__fadeInDown animate__delay-2s' now={skill.const} />
            </Col>
            })}
            </Col>
        </Row>
    </Container>
</div>
)
}

export default SkillPage