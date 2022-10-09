import image from '../public/3d-printing.png'

const Home = () => {
    return (
        <div className="text-center py-md-4 ">
            <h1>Welcome to ThreeDPrintWorkshop!</h1>
            <h4>Here you will find your 3D printed solution!</h4>
            <section>
                <img src={image} alt="No-printer" />
            </section>
        </div>
    )
}

export default Home;