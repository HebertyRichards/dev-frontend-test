"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, MessageSquare, User, DollarSign, Target } from "lucide-react";

export function ContactForm() {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState({
    street: "",
    neighborhood: "",
    city: "",
    state: "",
  });
  const [consentCpf, setConsentCpf] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCepChange = async (value: string) => {
    const cleanCep = value.replace(/\D/g, "");
    setCep(cleanCep);

    if (cleanCep.length === 8) {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://viacep.com.br/ws/${cleanCep}/json/`
        );
        const data = await response.json();

        if (!data.erro) {
          setAddress({
            street: data.logradouro || "",
            neighborhood: data.bairro || "",
            city: data.localidade || "",
            state: data.uf || "",
          });
        }
      } catch (error: unknown) {
        console.error("Erro ao buscar CEP:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário enviado com os seguintes dados:", {
      cep,
      address,
      consentCpf,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <MessageSquare className="h-5 w-5 text-primary" />
          <span>Formulário de Contato</span>
        </CardTitle>
        <CardDescription>
          Preencha todos os campos para uma análise mais precisa
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <User className="h-4 w-4 text-primary" />
              <h3 className="font-semibold">Informações Pessoais</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome Completo *</Label>
                <Input id="name" placeholder="Seu nome completo" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Telefone *</Label>
                <Input id="phone" placeholder="(11) 99999-9999" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="profession">Profissão</Label>
                <Input id="profession" placeholder="Sua profissão" />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <DollarSign className="h-4 w-4 text-primary" />
              <h3 className="font-semibold">Informações Financeiras</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="income">Renda Mensal (R$) *</Label>
                <Input id="income" type="number" placeholder="8000" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="savings">
                  Valor Disponível para Entrada (R$)
                </Label>
                <Input id="savings" type="number" placeholder="50000" />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <Target className="h-4 w-4 text-primary" />
              <h3 className="font-semibold">Objetivos de Investimento</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="objective">Objetivo Principal *</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione seu objetivo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="moradia">Moradia própria</SelectItem>
                    <SelectItem value="investimento">
                      Investimento para renda
                    </SelectItem>
                    <SelectItem value="ambos">Ambos</SelectItem>
                    <SelectItem value="diversificacao">
                      Diversificação de portfólio
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="timeline">Prazo para Investir</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o prazo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="imediato">
                      Imediato (até 3 meses)
                    </SelectItem>
                    <SelectItem value="curto">
                      Curto prazo (3-6 meses)
                    </SelectItem>
                    <SelectItem value="medio">
                      Médio prazo (6-12 meses)
                    </SelectItem>
                    <SelectItem value="longo">
                      Longo prazo (mais de 1 ano)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="property-type">Tipo de Imóvel de Interesse</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apartamento">Apartamento</SelectItem>
                  <SelectItem value="casa">Casa</SelectItem>
                  <SelectItem value="cobertura">Cobertura</SelectItem>
                  <SelectItem value="terreno">Terreno</SelectItem>
                  <SelectItem value="comercial">Imóvel Comercial</SelectItem>
                  <SelectItem value="qualquer">Qualquer tipo</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="h-4 w-4 text-primary" />
              <h3 className="font-semibold">Localização</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cep">CEP *</Label>
                <Input
                  id="cep"
                  value={cep.replace(/(\d{5})(\d{3})/, "$1-$2")}
                  onChange={(e) => handleCepChange(e.target.value)}
                  placeholder="00000-000"
                  maxLength={9}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="street">Rua</Label>
                <Input
                  id="street"
                  value={address.street}
                  onChange={(e) =>
                    setAddress({ ...address, street: e.target.value })
                  }
                  placeholder="Será preenchido automaticamente"
                  disabled={isLoading}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="neighborhood">Bairro</Label>
                <Input
                  id="neighborhood"
                  value={address.neighborhood}
                  onChange={(e) =>
                    setAddress({
                      ...address,
                      neighborhood: e.target.value,
                    })
                  }
                  placeholder="Bairro"
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">Cidade</Label>
                <Input
                  id="city"
                  value={address.city}
                  onChange={(e) =>
                    setAddress({ ...address, city: e.target.value })
                  }
                  placeholder="Cidade"
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">Estado</Label>
                <Input
                  id="state"
                  value={address.state}
                  onChange={(e) =>
                    setAddress({ ...address, state: e.target.value })
                  }
                  placeholder="UF"
                  disabled={isLoading}
                />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="message">Informações Adicionais</Label>
              <Textarea
                id="message"
                placeholder="Conte-nos mais sobre seus objetivos, preferências ou dúvidas específicas..."
                rows={4}
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Checkbox
                id="consent-cpf"
                checked={consentCpf}
                onCheckedChange={(checked) => setConsentCpf(checked as boolean)}
              />
              <div className="space-y-1">
                <Label
                  htmlFor="consent-cpf"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Autorizo consulta de CPF/CNPJ para análise de crédito
                </Label>
                <p className="text-xs text-muted-foreground">
                  Opcional. Permite análise mais precisa da sua capacidade de
                  financiamento.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Checkbox id="consent-terms" required />
              <Label
                htmlFor="consent-terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Aceito os termos de uso e política de privacidade *
              </Label>
            </div>
          </div>
          <Button type="submit" size="lg" className="w-full">
            Enviar Solicitação
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
