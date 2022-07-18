import { useState } from "react";
import { View, Text, VStack,Heading, Icon,useTheme} from "native-base";
import { Envelope, Key } from "phosphor-react-native"
import  Logo  from "../assets/logo_primary.svg";


import { Input } from "../components/Input";
import { Button} from "../components/Button"
function SignIn(){

    const [name,setName] = useState('');
    const [password,setPassword] = useState('');

        const { colors } = useTheme();
        return (
            <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
                <Logo/>
                <Heading color="gray.100" fontSize={20} mb={6} mt={20}>
                    Acesse sua conta
                </Heading>
                <Input 
                onChangeText={setName}
                mb={4}
                InputLeftElement={<Icon as={<Envelope color={colors.gray[300]}/>} ml={4} />}
                placeholder="E-mail"/>
                <Input placeholder="Senha"
                onChangeText={setPassword}
                mb={8}
                InputLeftElement={<Icon as={<Key color={colors.gray[300]}/>} ml={4} />}
                secureTextEntry
                />
                <Button
                title="Entrar"
                w="full"
                />
            </VStack>
        );
    }

    export {SignIn}