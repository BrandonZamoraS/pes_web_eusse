
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
            className="flex flex-col justify-center relative bg-white rounded-md p-8 shadow-md hover:shadow-xl transition-all duration-300 h-full"
          >
            <Image
              src={company.logo}
              alt={company.title}
              width={160}
              height={64}
              className="h-auto w-auto mx-auto mb-4"
            />

            <h3 className="text-2xl font-bold text-brand-900 mb-2 border-b pb-5 border-brand-200 text-center">
              {company.title}
            </h3>

            <div className="flex items-center gap-2 mt-8 mb-4 justify-center">
              <MdPhone className="text-brand-900" aria-hidden="true" />
              <span className="text-sm font-medium text-brand-900">
                {company.phone}
              </span>
            </div>

            <div className="flex items-center gap-2 mb-4 justify-center">
              <MdOutlineEmail className="text-brand-900" aria-hidden="true" />
              <span className="text-sm font-medium text-brand-900">
                {company.email}
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
