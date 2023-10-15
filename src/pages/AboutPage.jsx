import {Container, Row, Col} from 'react-bootstrap'
import Fullp from '../assets/img/fullp.png'


const AboutPage = () => {
  return (
    <div className='about-page w-100 min-vh-100 d-flex align-items-center'>
    <Container>
      <Row className='header-box d-flex align-items-center animate__animated animate__fadeInUp'>
        <Col lg='6' className='pe-5 pt-lg-0 pt-5'>
            <img src={Fullp} alt="hero-img" />
        </Col>
        <Col lg='6'>
          <h3 className='mb-4 rounded-4 animate__animated animate__fadeInUp animate__delay-1s'>
            Profile Saya
          </h3>
          <p className='mb-4 animate__animated animate__fadeInUp animate__delay-1s'>Perkenalkan nama saya <b>Iqbal Kurniawan</b> ,saya lahir di Karawang pada tahun 2002 tepatnya <b>17 juli 2002</b>. Saya menjalani pendidikan Tk dan Sd di Karawang dan pada awal Smp saya pindah tempat tinggal ke Cikarang hingga Sekarang. Lanjut pendidikan saya memilih SMK karena merasa lebih cocok karena ada jurusan komputer, sebab saya setelah pindah ke Cikarang lebih tertarik menggunakan laptop atau Komputer ,sehingga setelah lulus SMK saya memilih jurusan Informatika (sudah berganti nama di kampus saya yang sebelumnya <b>Teknik Informatika</b> menjadi <b>Informatika</b>) dengan harapan bisa menjadi seorang programmer. </p>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default AboutPage