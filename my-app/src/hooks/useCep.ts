import { useState } from "react";
import { z } from "zod";

const AddressSchema = z.object({
  logradouro: z.string(),
  bairro: z.string(),
  localidade: z.string(),
  uf: z.string(),
});

export type Address = z.infer<typeof AddressSchema>;

export function useCep() {
  const [address, setAddress] = useState<Address | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAddress = async (cep: string) => {
    if (!/^\d{8}$/.test(cep)) {
        setError("CEP deve conter 8 números.");
        return;
    }
    
    setIsLoading(true);
    setError(null);
    setAddress(null);
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      if (!response.ok) {
        throw new Error("Não foi possível buscar o CEP. Tente novamente.");
      }
      const data = await response.json();

      if (data.erro) {
        setError("CEP não encontrado.");
        setAddress(null);
        return;
      }
      
      const parsedAddress = AddressSchema.safeParse(data);
      if(!parsedAddress.success) {
        throw new Error("O formato da resposta da API de CEP é inválido.");
      }

      setAddress(parsedAddress.data);

    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Ocorreu um erro inesperado.");
      }
      setAddress(null);
    } finally {
      setIsLoading(false);
    }
  };

  return { address, isLoading, error, fetchAddress };
}