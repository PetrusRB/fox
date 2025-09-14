'use client'

import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  useColorScheme,
} from 'react-native'
import { Input } from 'app/components/ui/input'
import { Button } from 'app/components/ui/button'
import { Label } from 'app/components/ui/label'
import Spinner from 'app/components/loading/Spinner'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from 'app/components/card'
import Icon from 'app/components/Icons/Icon'
import colors from 'app/constants/colors'

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSignUp, setIsSignUp] = useState(true)
  const colorSchema = useColorScheme()
  const theme = colors[colorSchema ?? 'light']

  const handleSubmit = async () => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      className="flex-1 bg-background"
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className="flex-1"
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex-1 items-center justify-center px-4 py-6">
          <Card className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl bg-white dark:bg-zinc-900 backdrop-blur-lg shadow-card rounded-2xl">
            <CardHeader className="items-center space-y-2 p-6">
              <CardTitle className="text-center text-2xl font-bold">
                {isSignUp ? 'Crie sua conta' : 'Bem-vindo de volta'}
              </CardTitle>
              <CardDescription className="text-center">
                {isSignUp
                  ? 'Preencha os dados abaixo para começar'
                  : 'Acesse sua conta para continuar'}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6 p-6">
              {/* Email/Password Form */}
              <View className="space-y-4">
                {isSignUp && (
                  <View className="space-y-1">
                    <Label className="text-md font-medium">Nome criativo</Label>
                    <View className="relative">
                      <Input
                        icon="person"
                        iconColor={colorSchema == 'dark' ? '#2ECC71' : 'black'}
                        iconPosition="left"
                        placeholder="Digite um nome criativo"
                        className="h-12 rounded-lg pl-10 pr-3"
                      />
                    </View>
                  </View>
                )}

                <View className="space-y-1 pt-4">
                  <Label className="text-md font-medium ">E-mail</Label>
                  <View className="relative">
                    <Input
                      placeholder="Digite seu e-mail"
                      keyboardType="email-address"
                      icon="mail"
                      iconColor={colorSchema == 'dark' ? '#2ECC71' : 'black'}
                      iconPosition="left"
                      autoCapitalize="none"
                      className="h-12 rounded-lg pl-10 pr-3"
                    />
                  </View>
                </View>

                <View className="space-y-1 pb-6 pt-4">
                  <Label className="text-md font-medium">Senha</Label>
                  <View className="relative">
                    <Input
                      placeholder="Digite sua senha"
                      icon="lockClosed"
                      iconColor={colorSchema == 'dark' ? '#2ECC71' : 'black'}
                      iconPosition="left"
                      secureTextEntry={!showPassword}
                      className="h-12 rounded-lg pl-10 pr-10"
                    />
                    <TouchableOpacity
                      className="absolute right-3 top-3"
                      onPress={() => setShowPassword(!showPassword)}
                    >
                      <Icon
                        name={showPassword ? 'eyeOff' : 'eye'}
                        color={colorSchema == 'dark' ? '#2ECC71' : 'black'}
                        className="text-primary"
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                <Button
                  onPress={handleSubmit}
                  disabled={isLoading}
                  className="h-12 w-full justify-center bg-primary rounded-lg shadow-md active:scale-[0.98]"
                >
                  {isLoading ? (
                    <View className="flex flex-row items-center justify-center space-x-2">
                      <ActivityIndicator color="#fff" size="small" />
                      <Text className="text-base font-medium text-white">
                        {isSignUp ? 'Criando conta...' : 'Entrando...'}
                      </Text>
                    </View>
                  ) : (
                    <Text className="text-base font-medium text-white">
                      {isSignUp ? 'Criar conta' : 'Entrar'}
                    </Text>
                  )}
                </Button>
              </View>

              {/* Toggle Sign Up / Sign In */}
              <View className="items-center mt-4">
                <Text className="text-md text-black dark:text-white">
                  {isSignUp ? 'Já tem uma conta?' : 'Ainda não tem conta?'}
                </Text>
                <Button
                  variant="link"
                  className="text-primary px-0 text-md font-semibold"
                  onPress={() => setIsSignUp(!isSignUp)}
                >
                  {isSignUp ? 'Entrar' : 'Cadastrar'}
                </Button>
              </View>
            </CardContent>
          </Card>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
