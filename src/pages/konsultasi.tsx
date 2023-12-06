import Image from 'next/image'
import Link  from 'next/link'
import Head from 'next/head'
import NavbarAfterLogin from '@/components/navbar/navbarAfterLogin'
import Footer from '@/components/footer/footer'
import FilterPsikiater from '@/components/konsultasi/filterPsikiater'
import ListPsikiater from '@/components/konsultasi/listPsikiater'

export default function Konsultasi() {
  return (
    <div>
      <Head>
        <title>Serenity</title>
        <Link rel="icon" href="/Images/logoNoText.svg" />
      </Head>
      <div className="sticky top-0 z-50">
        <NavbarAfterLogin/>
      </div>
      <div className="bg-gradient-to-t from-secondary2 to-secondary font-montserrat">
        {/* search bar */}
        <div className="flex justify-center text-body1">
          <input type="text" placeholder="Cari psikiater" className="input-field mx-[143px] mt-[59px] mb-[15px] p-[20px] w-full border-[1px] border-monochrome_light bg-scroll bg-no-repeat bg-[center_right_1rem]" style={{ backgroundImage: "url('/images/searchIcon.svg')"}}></input>
        </div>
        {/* filter dan list psikiater */}
        <div className="flex mx-[143px] space-x-[25px]">
          {/* Filter */}
          <FilterPsikiater/>
          {/* list psikiater */}
          <ListPsikiater/>
        </div>
      </div>
      <div className="sticky z-30">
        <Footer />
      </div>
    </div>
  )
}