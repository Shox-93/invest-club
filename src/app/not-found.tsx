import { Container } from "@/components/ui/container";
import Link from "next/link";

const NotFound = async () => {
  return (
    <section
      className="pt-50 pb-84.25 min-h-screen bg-white"
      data-slot="not-found"
    >
      <Container>
        <div className="min-h-screen flex items-center justify-center flex-col">
          <h2 className="text-[300px] tracking-[-2%] leading-[100%] font-thin">404</h2>
          <p className="font-light text-[40px] leading-[100%] tracking-[-2] mb-22.5">Страница не найдено</p>
           <Link href={"/"} className="inline-block py-8.25 px-13.75 rounded-[6px] bg-linear-to-tr from-[#FAEBD7] via-[#D8B78F] to-[#FAEBD7] text-xl font-medium text-[#624A29] leading-[100%]">
                    Вернутся на главную
                </Link>
        </div>
      </Container>
    </section>
  );
};

export default NotFound;
