import React, {useState, useContext, createContext} from 'react';

export const UserContext = createContext();

export default function UserProvider({ children }) {

    const [signed, setSigned] = useState(false);
    const [name, setName] = useState(false);
    const [mail, setmail] = useState(false);
    const [nascimento, setNascimento] = useState(false);
    const [endereco, setEndereco] = useState(false);
    const [desde, setDate] = useState(false); 
    const [rule, setRule] = useState(false);
    const [id, setId] = useState(false);

    return (
        <UserContext.Provider
            value={{
                signed,
                setSigned,
                name,
                setName,
                mail,
                setmail,
                nascimento,
                setNascimento,
                endereco,
                setEndereco,
                desde,
                setDate,
                rule,
                setRule,
                id,
                setId
            }}
        >
            {  children }
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);
    const { signed, setSigned, name, setName, mail, setmail, nascimento, setNascimento, endereco, setEndereco, desde, setDate, rule, setRule, id, setId } = context;
    return{ signed, setSigned, name, setName, mail, setmail, nascimento, setNascimento, endereco, setEndereco, desde, setDate, rule, setRule, id, setId };
}