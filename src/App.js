import Phone from './components/Phone/Phone';
import Description from './components/Description/Description';
import Container from './components/Container/Container';

const App = () => {
    return (
        <main>
            <Container>
                <Phone />
                <Description />
            </Container>
        </main>
    );
};

export default App;
