import {Container, Row, Col, ProgressBar} from 'react-bootstrap'
import HeroImage from '../assets/img/testo.png'
import skillimg from '../assets/img/skill.png'
import profile from '../assets/img/profil.png'
import {semuaSkill} from '../data/index'
import {useNavigate} from 'react-router-dom'


const HomePage = () => {
  let navigate = useNavigate();

return (
<div className="homepage w-100">
  <header className=" min-vh-100 d-flex align-items-center overflow-hidden">
    <Container>
      <Row className='header-box d-flex align-items-center'>
        <Col lg='6'>
          <h1 className='mb-4 animate__animated animate__fadeInUp animate__delay-1s'>
            Selamat Datang <br /> Di Halaman Website <br /><span>Portofolio Saya</span>
          </h1>
          <p className='mb-4 animate__animated animate__fadeInUp animate__delay-1s'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi quis inventore officia in iusto ipsa libero sunt? Quae porro dolorem dignissimos maiores eveniet reiciendis optio doloribus corporis? Consequuntur, ipsa doloremque.</p>
          <button className='btn btn-danger btn-lg rounded-1 me-2 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s' onClick={() => navigate('/about')}>Lihat Saya</button>
          <button className='btn btn-outline-danger btn-lg rounded-1 me-2 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s' onClick={() => navigate('/experience')}>Pengalaman</button>
        </Col>
        <Col lg='6' className='pt-lg-0 pt-5'>
        <img src={HeroImage} alt="hero-img" className='animate__animated animate__fadeInUp' />
        </Col>
      </Row>
    </Container>
  </header>
  <div className='about-page w-100 min-vh-100 d-flex align-items-center'>
    <Container>
    <Row>
        <Col data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          <h1 className='text-center fw-bold pt-lg-0 pt-5'>Tentang Saya</h1>
        </Col>
      </Row>
      <Row className=' d-flex align-items-center'>
        <Col lg='6' className='pe-5 pt-lg-0 pt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
            <img src={profile} alt="hero-img" />
        </Col>
        <Col lg='6' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700">
          <h1 className='mb-4 pt-lg-0 pt-5'>
            Profile Saya
          </h1>
          <p className='mb-4'>Perkenalkan nama saya <b>Iqbal Kurniawan</b> ,saya lahir di Karawang pada tahun 2002 tepatnya <b>17 juli 2002</b>. Saya menjalani pendidikan Tk dan Sd di Karawang dan ... </p>
        </Col>
      </Row>
      <Row>
        <Col className='text-center pb-5'>
        <button className='btn btn-success rounded-4 btn-lg' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" onClick={() => navigate('/about')}>Lihat lebih lanjut <i className='fa-solid fa-chevron-right ms-1'></i></button>
        </Col>
      </Row>
    </Container>
    </div>
    <div className='experience'>
    <Container>
      <Row>
        <Col data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <h1 className='text-center fw-bold pt-lg-0 pt-5'>Experience</h1>
          <p className='text-center pb-5'>Pengalaman yang pernah saya lalui.</p>
        </Col>
      </Row>
        <Row>
            <Col className='align-items-center' lg='6' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            <h2 className=' pt-1 shadow-sm rounded-4'>
                Operator Gudang
            </h2>
            <h4 className='mb-4 ps-3'>PT Hero Supermarket tbk</h4>
            <p className='mb-4 ps-3'>
                melakukan Pkl di salah satu supermarket pada bagian Gudang. </p>
            </Col>

            <Col className='masa pt-5' >
                <p className='fw-bold' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">mulai dari Juli 2018 - Oktober 2018</p>
            </Col>
        </Row>

        <Row className=' pt-5'>
            <Col className='align-items-center' lg='6' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
            <h2 className='pt-1 shadow-sm rounded-4'>
                Admin It Support
            </h2>
            <h4 className='mb-4 ps-3'>PT Kalbe Farma tbk</h4>
            <p className='mb-4 ps-3'>
                melakukan Pkl di salah satu supermarket pada bagian It Support, yang memiliki jobdesk seperti membantu troubleshooting, melakukan penginstalan software, membantu masalah jaringan dan sebagainya. </p>
            </Col>

            <Col className='masa pt-5' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="700">
                <p className='fw-bold'>mulai dari Januari 2019 - April 2019</p>
            </Col>
        </Row>
    </Container>
    </div>
    <div className='skill'>
      <Container>
        <Row>
          <Col data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
           <h1 className='text-center fw-bold'>Skill</h1>
            <p className='text-center pb-5'>Kemampuan yang saya miliki saat ini</p>
          </Col>
        </Row>

        <Row className='d-flex align-items-center'>

        <Col lg='6' className='img-box pe-4 pt-lg-0 pt-3' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600">
                <img src={skillimg} alt="icon-skill" />
            </Col>

            <Col className='box2' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
            <h1>Skill</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non accusantium tenetur beatae omnis, itaque
                commodi quia exercitationem ipsum ratione cupiditate expedita consectetur praesentium mollitia et sed,
                amet animi rem cum!</p>
            {semuaSkill.map((skill) =>{
            return <Col key={skill.id} className='ps-3' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
            <p>{skill.desc}</p>
            <ProgressBar now={skill.const} />
            </Col>
            })}
            </Col>
        </Row>
      </Container>
    </div>
    <div className='interest'>
    <Container>
            <Row>
              <Col data-aos="fade-down" data-aos-duration="1000" data-aos-delay="600">
                <h1 className='text-center fw-bold'>Minat atau Interest</h1>
              </Col>
            </Row>
            <Row>
                <Col data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
                    <p className='pt-3'>Saya dari kecil memiliki minat ke barang elektronik seperti handphone atau komputer, tetapi lebih cenderung ke hp saat masih kecil karena saya sendiri juga jarang ke warnet dan dirumah tidak memiliki komputer saat itu. Karena saya sering memainkan handphone dari kecil sehingga merasa bosan dengan handphone saat ini dan ingin mencoba beralih ke komputer atau laptop, jadi saat masuk Smk saya memilih jurusan Teknik Komputer dan Jaringan. Dari situ saya mulai mengeksplor dunia komputer mulai dari desain, game dan koding. Pada waktu Smk saya sendiri masih kurang tertarik ke koding dan lebih memilih desain karena saat itu masih baru pertama kali mempunyai laptop dan mendesain sesuatu dilaptop sangat menarik karena banyak hal baru yang bisa dipelajari. hingga saya kuliah dan masuk ke jurusan Informatika disana banyak sekali materi tentang koding dan desain hanya dijadikan sebagai sampingan saja. Dan dari situ saya mulai tertarik ke koding tetapi saat saya belum sempat mempelajari 1 bahasa pemprograman sudah berganti bahasa pemprograman disemester berikutnya, mulai dari html, php, java. Jadi saya masih belum terlalu paham mengenai koding jadi saya menggunakan kesempatan ini untuk mendalami minimal 1 bahasa pemprograman supaya bisa dengan mudah beradaptasi dengan bahasa lainnya.  </p>
                </Col>
            </Row>
    </Container>
    </div>
    <div className='awards-page d-flex align-items-center'>
        <Container>
            <Row className='sertif-box'>
                <Col data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                    <h1 className='rounded-4'>Awards</h1>
                    <div className='icon pt-5'>
                        <ol><i className='fa fa-envelope-open aria-hidden=true'></i> Pelatihan VSGA G5 JGD Bpptik</ol>
                        <ol><i className='fa fa-id-card' aria-hidden='true'></i> Pelatihan Python Online</ol>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  
</div>
)
}

export default HomePage