import logo from "../images/ZapRecall-Recursos/logo.png";
import "./telainicial.css";


function TelaInicial(){
    return (
        <>
            <img src = {logo}/>;
            <p>ZapRecall</p>
            <div class = "BotãoIniciar">
                Iniciar Recall!
            </div>
        
        </>
    );
}