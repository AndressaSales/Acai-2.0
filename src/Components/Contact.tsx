export default function Contact(){
    return(
        <>
            <div className="flex items-center justify-center flex-col contact">
                <h1 className="max-w-[600px] text-[#4c4c4c] contact-h1">Tem Alguma Pergunta Em Mente?</h1>
                <h1 className="max-w-[600px] text-[#4c4c4c] contact-h1">Deixe-me Ajudar Você</h1>
                <div className="bg-[#fff] max-w-[700px] w-[100%] mt-[3rem] flex items-center p-[1rem] rounded-[5rem]">
                    <input 
                        type="text" 
                        placeholder="seuemail@gmail.com" 
                        className="flex-1 h-[100%] outline-none text-[1.3rem]"
                    />
                    <button className="text-[1.1rem] font-bold bg-[#fe9e0d] flex justify-center items-center text-[#fff] rounded-[5rem] transition-[0.2s] contact-button">Enviar</button>
                </div>
            </div>
        </>
    )
}