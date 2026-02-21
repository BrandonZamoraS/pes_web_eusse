
'use client'

import { motion } from 'framer-motion';
import { MdPhone, MdOutlineEmail } from "react-icons/md";
import Image from 'next/image';
import Link from 'next/link';

type Company = {
  logo: string;
  title: string;
  href: string;
  phone: string;
  email: string;
};

export default function CompanyCardGrid({ companies }: { companies: Company[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-8 my-12">
      {companies.map((company, index) => (
        <motion.div
          key={company.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ y: -6, transition: { duration: 0.3 } }}
          className="w-[320px] magnify-disable-reveal"
        >
          <Link
            href={company.href}
            prefetch={true}
            className="flex flex-col relative bg-white rounded-md p-8 shadow-md hover:shadow-xl transition-all duration-300 h-full"
          >
            <div className="relative mx-auto mb-4 h-24 w-full sm:h-28 shrink-0">
              <Image
                src={company.logo}
                alt={company.title}
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-contain object-center"
              />
            </div>

            <div className="border-b border-brand-200 mb-6 pb-4 shrink-0">
              <h3 className="text-2xl font-bold text-brand-900 text-center min-h-[4rem] flex items-center justify-center">
                {company.title}
              </h3>
            </div>

            <div className="flex-grow flex flex-col justify-end">
              <div className="flex items-center gap-2 mb-4 justify-center">
                <MdPhone className="text-brand-900" aria-hidden="true" />
                <span className="text-sm font-medium text-brand-900">
                  {company.phone}
                </span>
              </div>

              <div className="flex items-center gap-2 mb-2 justify-center">
                <MdOutlineEmail className="text-brand-900" aria-hidden="true" />
                <span className="text-sm font-medium text-brand-900">
                  {company.email}
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
