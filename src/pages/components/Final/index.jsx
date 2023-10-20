import './index.css';

const Final = () => {

    const HandleRefresh = () => {
        window.location.reload();
    }

    return(
        <div className="container__final">
            <div className="txt">
                <h2>Cláudio Belo, n7</h2>
                <h2>Gabriel Onofre, n14</h2>
                <h2>Heros Nuciatelli, n20</h2>
                <h2>Kauan Bueno, n25</h2>
                <h2>Pedro Marin, n36</h2>
            </div>
            <button className='glow-on-hover refresh' style={{
                position: 'absolute',
                bottom: '10%'
            }}
            onClick={HandleRefresh}
            >Voltar</button>
        </div>
    )
}

export default Final;