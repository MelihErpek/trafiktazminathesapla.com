import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Logo from "./Asset 1.png"
import Logo2 from "./whatsapp.png";

const products = [
  { name: 'Trafik Kazasından Sonra Sigorta Şirketine Karşı Açılabilecek Maddi Tazminat Davası', description: 'Trafik kazaları, hem maddi hem de manevi açıdan ciddi sonuçlara yol açabilen olaylardır', href: '/trafik-kazasından-sonra-sigorta-sirketine-karsi-acilabilecek-maddi-tazminat-davasi', icon: ChartPieIcon },
  { name: 'Trafik Kazası Sonrasında Araç Değer Kaybının Talep Edilmesi', description: 'Trafik kazaları, araç sahipleri için stresli ve maddi açıdan zorlayıcı durumlar yaratabilir.', href: '/trafik-kazasi-sonrasında-arac-deger-kaybinin-talep-edilmesi', icon: CursorArrowRaysIcon },
  { name: 'Kaza Kusur Oranına İtiraz: Haklarınızı Korumak İçin Hukuki Adımlar', description: 'Trafik kazaları, birçok açıdan karmaşık ve stresli durumlar yaratabilir.', href: '/kaza-kusur-oranına-itiraz-haklarinizi-korumak-icin-hukuki-adimlar', icon: FingerPrintIcon },
  { name: 'Trafik Kazasında İkame Araç Bedeli Talebi: Haklarınızı Korumak İçin Bilinmesi Gerekenler', description: 'Trafik kazaları, hem maddi hem de manevi açıdan zorlayıcı durumlar yaratabilir.', href: '/trafik-kazasinda-ikame-arac-bedeli-talebi-haklarinizi-korumak-icin-bilinmesi-gerekenler', icon: SquaresPlusIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white ">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-20 w-auto" src={Logo} alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-4">
          <Popover className="relative">
            <Popover.Button className="flex items-center  gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Makaleler
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">

                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Hakkımızda
          </a> */}
          <div className='bg-blue-300 rounded-lg px-1 py-1'>
            <a href="/tazminat-hesapla" className="text-sm font-semibold leading-6 text-white">
              Trafik Tazminat Hesapla
            </a>
          </div>
          <div className='bg-blue-300 rounded-lg px-1 py-1'>
            <a href="/tazminat-hesapla" className="text-sm font-semibold leading-6 text-white">
              Maddi Hasar Tazminat Hesapla
            </a>
          </div>
          

        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          </a>
        </div>
      </nav>
      <div className="fixed top-1 sm:top-4 right-8">
        <a
          aria-label="Chat on WhatsApp"
          href="https://wa.me/905516763472"
          target="_blank"
          className="flex"
        >
          <img alt="Chat on WhatsApp" src={Logo2} className="h-8 w-8 sm:h-24 sm:w-24 " />
          <div className="font-bold my-auto ml-2">Bize WhatsApp ile ulaşın.</div>
        </a>
      </div>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Makaleler
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products,].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Hakkımızda
                </a>
                <div className='bg-blue-300 rounded-lg px-1 py-1 w-40'>
                  <a href="/tazminat-hesapla" className="text-sm font-semibold leading-6 text-gray-900">
                    Trafik Tazminat Hesapla
                  </a>
                </div>
                <div className='bg-blue-300 rounded-lg px-1 py-1 w-56'>
                  <a href="/tazminat-hesapla" className="text-sm font-semibold leading-6 text-gray-900">
                    Maddi Hasar Tazminat Hesapla
                  </a>
                </div>

              </div>

            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
