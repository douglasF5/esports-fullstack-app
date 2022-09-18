import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog';

export function BannerCreateAd() {
  return (
    <div className="mt-8 pt-1 bg-gradient self-stretch rounded-lg overflow-hidden">
      <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
        <div>
          <strong className="text-2xl text-white font-black">Não encontrou seu duo?</strong>
          <p className="text-zinc-400">Publique um anúncio para encontrar novos players!</p>
        </div>
        <Dialog.Trigger type='button' className="flex items-center gap-2 py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600">
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </div>
  );
}