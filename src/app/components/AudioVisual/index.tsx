import { ArrowRight } from 'lucide-react'
import { AudioVis } from './AudioVis'
import { Pallet } from './Palett'
import { LogOne } from './LogOne'

export function AudioVisual() {
  return (
    <div className=" order-5 flex h-[794px] w-[1280px] flex-none  flex-grow-0 flex-row   items-center  justify-center gap-16 self-stretch p-[32px_0_32px_80px]">
      <div className=" order-0 flex flex-none flex-col items-start justify-center gap-1 p-0 ">
        <Pallet />
        <h1 className="mb-1 mt-1 size-6 h-[24px] w-[166px] font-bold   text-base-brand-primary-600">
          E o que a gente faz?
        </h1>
        <LogOne />

        <h2 className="order-3 h-[96px] w-[441px] flex-none flex-grow-0 font-proximaNova text-base leading-6 text-base-font-dark-800">
          A Beabstracto conta com profissionais especialistas em audiovisual,
          tecnologia e marketing, oferecendo soluções integradas e inovadoras
          para atender às necessidades variadas da sua empresa.
        </h2>
      </div>

      <div className=" order-1 flex h-[730px] w-[494px] flex-none flex-grow flex-col items-start justify-center gap-2 p-0  ">
        <div className=" h-[594px] w-[429px] animate-fadeIn">
          <a
            href="https://beabstracto.web.app/#services"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AudioVis />
          </a>
        </div>

        <div className="h-[128px] w-[430px] gap-2 p-0">
          <h1 className="order-0 h-[24px] w-[430px] flex-none flex-grow-0 text-xs font-semibold leading-6 text-base-font-dark-800">
            SOMOS MARKETEIROS
          </h1>

          <h2 className="h-[48px] w-[430px] text-base font-normal leading-6 text-base-font-warning-500 ">
            Lorem ipsum dolor sit amet consectetur. Sed aliquet adipiscing
            pulvinar pulvinar varius.
          </h2>

          <a
            href="https://beabstracto.web.app/#services"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className=" translate font-median flex items-center justify-center gap-2 rounded ">
              <h2 className=" animate-blink text-base font-bold text-base-global-blue-600 ">
                Todos serviços
              </h2>

              <ArrowRight className=" order-0 ml-auto h-4 w-4 flex-none  text-base-global-blue-600  hover:text-base-global-blue-700" />
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}
