"use client";

import React, { useState, useEffect } from "react";
import { z } from "zod";
import { useCep } from "@/hooks/useCep";
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

const formSchema = z.object({
  name: z.string().min(1, "O nome completo é obrigatório."),
  email: z
    .string()
    .min(1, "O e-mail é obrigatório.")
    .email("Por favor, insira um e-mail válido."),
  phone: z
    .string()
    .transform((value) => value.replace(/\D/g, ""))
    .refine((value) => value.length === 11 || value.length === 10, {
      message: "O telefone deve ter 10 ou 11 dígitos.",
    }),
  profession: z.string().optional(),
  income: z.coerce.number().positive("A renda deve ser um valor positivo."),
  savings: z.coerce
    .number()
    .positive("O valor para entrada deve ser positivo.")
    .optional(),
  objective: z.enum(["moradia", "investimento", "ambos", "diversificacao"], {
    message: "O objetivo principal é obrigatório.",
  }),
  timeline: z.string().optional(),
  propertyType: z.string().optional(),
  cep: z
    .string()
    .transform((value) => value.replace(/\D/g, ""))
    .refine((value) => value.length === 8, {
      message: "CEP inválido. Deve conter 8 números.",
    }),
  street: z.string().min(1, "A rua é obrigatória."),
  neighborhood: z.string().min(1, "O bairro é obrigatório."),
  city: z.string().min(1, "A cidade é obrigatória."),
  state: z.string().min(2, "O estado é obrigatório."),
  message: z.string().optional(),
  consentCpf: z.boolean().optional(),
  consentTerms: z.boolean().refine((value) => value === true, {
    message: "Você deve aceitar os termos de uso.",
  }),
});

export function ContactForm() {
  const {
    address,
    isLoading: isCepLoading,
    error: cepError,
    fetchAddress,
  } = useCep();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    profession: "",
    income: "",
    savings: "",
    objective: "",
    timeline: "",
    propertyType: "",
    cep: "",
    street: "",
    neighborhood: "",
    city: "",
    state: "",
    message: "",
    consentCpf: false,
    consentTerms: false,
  });

  const [errors, setErrors] = useState<Record<string, string | undefined>>({});

  useEffect(() => {
    const cleanCep = formData.cep.replace(/\D/g, "");
    if (cleanCep.length === 8) {
      fetchAddress(cleanCep);
    }
  }, [formData.cep, fetchAddress]);

  useEffect(() => {
    const cleanCep = formData.cep.replace(/\D/g, "");
    if (cleanCep.length === 8) {
      fetchAddress(cleanCep);
    }
  }, [formData.cep, fetchAddress]);

  useEffect(() => {
    if (address) {
      setFormData((prev) => ({
        ...prev,
        street: address.logradouro,
        neighborhood: address.bairro,
        city: address.localidade,
        state: address.uf,
      }));
    }
  }, [address]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleCheckboxChange = (id: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [id]: checked }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    value = value.replace(/\D/g, "");
    value = value.slice(0, 11);

    if (value.length > 10) {
      value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (value.length > 5) {
      value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d{0,5}).*/, "($1) $2");
    } else {
      value = value.replace(/^(\d*)/, "($1");
    }

    setFormData((prev) => ({ ...prev, phone: value }));
  };

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    value = value.replace(/\D/g, "");
    value = value.slice(0, 8);
    value = value.replace(/^(\d{5})(\d)/, "$1-$2");

    setFormData((prev) => ({ ...prev, cep: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = formSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Record<string, string | undefined> = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0];
        if (typeof key === "string") {
          fieldErrors[key] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }
    console.log("Formulário válido! Enviando dados:", result.data);
    alert("Formulário enviado com sucesso!");
  };

  return (
    <Card className="transition duration-500 hover:border-gray-900 dark:bg-slate-900 dark:hover:border-indigo-200 flex">
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
                <Input
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                />
                {errors.name && (
                  <p className="text-sm text-red-600 mt-1">{errors.name}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                />
                {errors.email && (
                  <p className="text-sm text-red-600 mt-1">{errors.email}</p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Telefone *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  placeholder="(11) 99999-9999"
                  maxLength={15}
                />
                {errors.phone && (
                  <p className="text-sm text-red-600 mt-1">{errors.phone}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="profession">Profissão</Label>
                <Input
                  id="profession"
                  value={formData.profession}
                  onChange={handleChange}
                  placeholder="Sua profissão"
                />
                {errors.profession && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.profession}
                  </p>
                )}
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
                <Input
                  id="income"
                  type="number"
                  value={formData.income}
                  onChange={handleChange}
                  placeholder="8000"
                />
                {errors.income && (
                  <p className="text-sm text-red-600 mt-1">{errors.income}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="savings">
                  Valor Disponível para Entrada (R$)
                </Label>
                <Input
                  id="savings"
                  type="number"
                  value={formData.savings}
                  onChange={handleChange}
                  placeholder="50000"
                />
                {errors.savings && (
                  <p className="text-sm text-red-600 mt-1">{errors.savings}</p>
                )}
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
                <Select
                  value={formData.objective}
                  onValueChange={(value) =>
                    handleSelectChange("objective", value)
                  }
                >
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
                {errors.objective && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.objective}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="timeline">Prazo para Investir</Label>
                <Select
                  value={formData.timeline}
                  onValueChange={(value) =>
                    handleSelectChange("timeline", value)
                  }
                >
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
                {errors.timeline && (
                  <p className="text-sm text-red-600 mt-1">{errors.timeline}</p>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="propertyType">Tipo de Imóvel de Interesse</Label>
              <Select
                value={formData.propertyType}
                onValueChange={(value) =>
                  handleSelectChange("propertyType", value)
                }
              >
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
              {errors.propertyType && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.propertyType}
                </p>
              )}
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
                  value={formData.cep}
                  onChange={handleCepChange}
                  placeholder="00000-000"
                  maxLength={9}
                />
                {errors.cep && (
                  <p className="text-sm text-red-600 mt-1">{errors.cep}</p>
                )}
                {isCepLoading && (
                  <p className="text-sm text-muted-foreground mt-1">
                    Buscando CEP...
                  </p>
                )}
                {cepError && (
                  <p className="text-sm text-red-600 mt-1">{cepError}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="street">Rua</Label>
                <Input
                  id="street"
                  value={formData.street}
                  onChange={handleChange}
                  placeholder="Será preenchido automaticamente"
                  disabled={isCepLoading}
                />
                {errors.street && (
                  <p className="text-sm text-red-600 mt-1">{errors.street}</p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="neighborhood">Bairro</Label>
                <Input
                  id="neighborhood"
                  value={formData.neighborhood}
                  onChange={handleChange}
                  placeholder="Bairro"
                  disabled={isCepLoading}
                />
                {errors.neighborhood && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.neighborhood}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">Cidade</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Cidade"
                  disabled={isCepLoading}
                />
                {errors.city && (
                  <p className="text-sm text-red-600 mt-1">{errors.city}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">Estado</Label>
                <Input
                  id="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="UF"
                  disabled={isCepLoading}
                />
                {errors.state && (
                  <p className="text-sm text-red-600 mt-1">{errors.state}</p>
                )}
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Informações Adicionais</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Conte-nos mais sobre seus objetivos, preferências ou dúvidas específicas..."
              rows={4}
            />
            {errors.message && (
              <p className="text-sm text-red-600 mt-1">{errors.message}</p>
            )}
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Checkbox
                id="consentCpf"
                checked={formData.consentCpf}
                onCheckedChange={(checked) =>
                  handleCheckboxChange("consentCpf", checked as boolean)
                }
              />
              <div className="grid gap-1.5 leading-none">
                <Label
                  htmlFor="consentCpf"
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
              <Checkbox
                id="consentTerms"
                checked={formData.consentTerms}
                onCheckedChange={(checked) =>
                  handleCheckboxChange("consentTerms", checked as boolean)
                }
              />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="consentTerms" className="text-sm font-medium">
                  Aceito os termos de uso e política de privacidade *
                </Label>
                {errors.consentTerms && (
                  <p className="text-sm text-red-600">{errors.consentTerms}</p>
                )}
              </div>
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
