import FormAdder from "@/components/pages/sumador/FormAdder";
import Image from "next/image";

export default function Sumador8BitsPage() {
  return (
    <main className="w-full">
      <div className="container py-16">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center py-5">
          Sumador de 8 Bits
        </h1>
        <FormAdder size={1} />

        <div className="flex flex-col gap-8">
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            nesciunt veritatis itaque reiciendis nisi eos ut necessitatibus quis
            ipsam ullam numquam libero delectus, nostrum omnis, est similique
            saepe reprehenderit? Quo.
          </p>

          <Image
            src={"/img/sumador_8bits.webp"}
            width={500}
            height={250}
            alt="imagen del sumador de 8 bits"
            className="self-center"
          />
        </div>
      </div>
    </main>
  );
}