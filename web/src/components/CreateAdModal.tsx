import * as Dialog from "@radix-ui/react-dialog";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { Input } from "./Form/input";
import { Check, GameController, CaretDown } from 'phosphor-react';
import { FormEvent, useEffect, useState } from "react";
import axios from "axios";

interface GameData {
  id: string;
  title: string;
}

export function CreateAdModal() {
  const [gamesListData, setGamesListData] = useState<GameData[]>([]);
  const [weekdaysSelected, setWeekdaysSelected] = useState<string[]>([]);
  const [useVoiceChannel, setUseVoiceChannel] = useState<boolean | "indeterminate">(false);
  const weekdays = [
    {
      name: 'Domingo',
      value: '0'
    },
    {
      name: 'Segunda-feira',
      value: '1'
    },
    {
      name: 'Terça-feira',
      value: '2'
    },
    {
      name: 'Quarta-feira',
      value: '3'
    },
    {
      name: 'Quinta-feira',
      value: '4'
    },
    {
      name: 'Sexta-feira',
      value: '5'
    },
    {
      name: 'Sábado',
      value: '6'
    },
  ];

  async function handleCreateAd(e: FormEvent) {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    console.log(data);

    if (!data.name) {
      return;
    }

    try {
      await axios.post(`http://localhost:3333/games/${data.game}/ads`, {
        name: data.name,
        yearsPlaying: Number(data.yearsPlaying),
        discord: data.discord,
        weekDays: weekdaysSelected.map(Number),
        hourStart: data.hourStart,
        hourEnd: data.hourEnd,
        useVoiceChannel: !!useVoiceChannel
      });

      alert('Anúncio criado com sucesso');
    } catch (err) {
      alert('Erro ao criar o anúncio');
      console.log(err);
    }
  }

  useEffect(() => {
    axios('http://localhost:3333/games')
      .then(response => {
        setGamesListData(response.data);
      });

  }, []);

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content className="w-[480px] fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg">

        <Dialog.Title className="text-3xl font-black">
          Publique um anúncio
        </Dialog.Title>

        <form onSubmit={e => handleCreateAd(e)} className="mt-8 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="game">Qual o game?</label>
            <div className="relative">
              <select
                className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 appearance-none cursor-pointer w-full"
                id="game"
                name="game"
                defaultValue=""
              >
                <option value='Selecione o game que deseja jogar'>
                  Selecione o game que deseja jogar
                </option>
                {gamesListData.map(game => (
                  <option key={game.id} value={game.id}>{game.title}</option>
                ))}
              </select>
              <CaretDown className="absolute right-2 top-[35%] text-white" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="name">{'Seu nome (ou nickname)'}</label>
            <Input id="name" name="name" placeholder='Como te chamam dentro do game' />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="yearsPlaying">Joga há quantos anos?</label>
              <Input type="number" id="yearsPlaying" name="yearsPlaying" placeholder='Tudo bem ser zero' />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="discord">Qual o seu discord?</label>
              <Input id="discord" name="discord" placeholder='usuário#0000' />
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="weekDays">Quando costuma jogar?</label>
              <ToggleGroup.Root
                type="multiple"
                className="grid grid-cols-4 gap-2"
                value={weekdaysSelected}
                onValueChange={setWeekdaysSelected}
              >
                {weekdays.map(day => (
                  <ToggleGroup.Item
                    key={day.value}
                    value={day.value}
                    className={`w-8 h-8 rounded ${weekdaysSelected.includes(day.value) ? 'bg-violet-500' : 'bg-zinc-900'}`}
                    title={day.name}
                  >{day.name[0]}</ToggleGroup.Item>
                ))}
              </ToggleGroup.Root>
            </div>

            <div className="flex flex-col gap-2 flex-1">
              <label className="font-semibold">Qual horário do dia?</label>
              <div className="grid grid-cols-2 gap-2">
                <Input id='hourStart' name='hourStart' type="time" placeholder='De' />
                <Input id='hourEnd' name='hourEnd' type="time" placeholder='Até' />
              </div>
            </div>
          </div>

          <label className="mt-2 flex gap-2 text-sm items-center">
            <Checkbox.Root
              checked={useVoiceChannel}
              onCheckedChange={checked => setUseVoiceChannel(checked)}
              className="w-6 h-6 p-1 rounded bg-zinc-900"
            >
              <Checkbox.Indicator>
                <Check className="w-4 h-4 text-emerald-400 pointer-events-none" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            Costumo me conectar ao chat de voz
          </label>

          <footer className="mt-4 flex justify-end gap-4">
            <Dialog.Close
              type="button"
              className="bg-zinc-500 hover:bg-zinc-600 px-5 h-12 rounded-md font-semibold"
            >
              Cancelar
            </Dialog.Close>
            <button type='submit' className="flex justify-center items-center bg-violet-500 px-5 h-12 rounded-md font-semibold gap-2 hover:bg-violet-600">
              <GameController size={24} />
              Encontrar duo
            </button>
          </footer>

        </form>

      </Dialog.Content>
    </Dialog.Portal>
  );
}