import { Header } from '@/components/main'
import React from 'react'

const page = () => {
  return (
    <div className='overflow-hidden'>
      <div className='fixed top-0  z-50 bg-white'>
        <Header />
        <div className='w-screen h-[2px] bg-border/gray'></div>
      </div>
      <div className='mx-auto max-w-3xl px-4 py-16 flex flex-col gap-4 z-10 md:mt-[7rem] mt-[5rem]'>
        <article >
          <h1 className='text-black mb-4 font-extrabold text-2xl'>1. Information We Collect</h1>
          <div className='mb-6'>
            <h2 className='text-black mb-2 text-lg'>1.1 Personal Information</h2>
            <p className=' mb-2 '>When you register for or use our services, we may collect the following personal information:</p>
            <p>
              Contact Information : Name, email address, phone number, and postal address.</p>
            <p>
              Financial Information : Bank account details, transaction history, investment information, and
              credit/debit card information.</p>
            <p>
              Identification Information : Government-issued ID, date of birth, and national identity number
              (NIN).</p>
            <p>
              Account Information: Username, password, and other credentials for accessing our services.
            </p>
          </div>
          <div className='mb-6'>
            <h2 className='text-black mb-2 text-lg'>1.2 Usage Data</h2>
            <p className=' mb-2 '>
              We may also collect information on how the service is accessed and used. This may include:
            </p>
            <p>
              Device Information : IP address, browser type, operating system, and device type.</p>
            <p>
              Log Data : Details of your use of our services, including timestamps, pages viewed, and other
              interaction data.</p>
            <p>
              Location Information : Approximate location based on your IP address or GPS data.
            </p>
          </div>
          <div className='mb-6'>
            <h2 className='text-black mb-2 text-lg'>1.3 Cookies and Tracking Technologies</h2>
            <p>We use cookies and similar tracking technologies to track the activity on our service and store
              certain information. This helps us provide a better user experience by remembering your
              preferences and visits to our site.
            </p>
          </div>
        </article>
        <article >
          <h1 className='text-black mb-4 font-extrabold text-2xl'>2. How We Use Your Information</h1>
          <div className='mb-6'>
            <p className=' mb-2 '>We use the information we collect for various purposes, including :
            </p>
            <ul>
              <li> Providing and Maintaining Services : To deliver, maintain, and improve our services and features</li>
              <li>  Account Management : To manage your account, including processing transactions and providing customer support.</li>
              <li>  Personalization: To tailor our services to your preferences and financial profile.</li>
              <li> Communication : To contact you with updates, newsletters, marketing or promotional materials, and other information that may be of interest to you.</li>
              <li>   Security : To monitor and enhance the security of our services and protect against fraud.</li>
              <li>  Legal Compliance : To comply with applicable laws, regulations, and legal processes.</li>
            </ul>
          </div>
        </article>
        <article >
          <h1 className='text-black mb-4 font-extrabold text-2xl'>3. Sharing Your Information </h1>
          <div className='mb-6'>
            <p className=' mb-2 '>We may share your information with third parties under the following circumstances :
            </p>
            <ul>
              <li>  Service Providers : We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, and customer support.</li>
              <li> Business Transfers : In the event of a merger, acquisition, or sale of all or a portion of our assets, your personal information may be transferred as part of that transaction.</li>
              <li>    Legal Requirements : We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
              <li>   Consent : We may share your information with your consent or at your direction.</li>
            </ul>
          </div>
        </article>
        <article >
          <h1 className='text-black mb-4 font-extrabold text-2xl'>4. Data Security</h1>
          <div className='mb-6'>
            <p className=' mb-2 '>We implement a variety of security measures to ensure the protection of your personal information. These measures include :
            </p>
            <p>
              Encryption: Using SSL/TLS encryption to protect data transmitted over the internet.</p>
            <p>
              Access Controls: Limiting access to your personal information to authorized personnel only.</p>
            <p>
              Security Audits: Regularly auditing our systems and practices to ensure data security.
            </p>
          </div>
        </article>
        <article >
          <h1 className='text-black mb-4 font-extrabold text-2xl'>5. Data Retention</h1>
          <div className='mb-6'>
            <p className=' mb-2 '>We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy. We will also retain and use your information to comply with legal obligations, resolve disputes, and enforce our agreements.
            </p>
          </div>
        </article>
        <article >
          <h1 className='text-black mb-4 font-extrabold text-2xl'>6. Your Rights</h1>
          <div className='mb-6'>
            <p className=' mb-2 '>Depending on your jurisdiction, you may have the following rights regarding your personal information:
            </p>
            <ul>
              <li> Access: The right to access the personal information we hold about you.</li>
              <li>  Correction: The right to request correction of inaccurate or incomplete information.</li>
              <li>    Deletion: The right to request the deletion of your personal information.</li>
              <li>  Restriction: The right to request the restriction of processing your personal information. </li>
              <li>     Objection: The right to object to the processing of your personal information.</li>
              <li> Portability: The right to request the transfer of your personal information to another entity.</li>
              <li> To exercise any of these rights, please contact us at [contact email].</li>
            </ul>
          </div>
        </article>
        <article >
          <h1 className='text-black mb-4 font-extrabold text-2xl'>7. Children's Privacy</h1>
          <div className='mb-6'>
            <p className=' mb-2 '>Our services are not intended for use by individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information from  our servers.
            </p>
          </div>
        </article>
        <article >
          <h1 className='text-black mb-4 font-extrabold text-2xl'>8. Changes to This Privacy Policy</h1>
          <div className='mb-6'>
            <p className=' mb-2 '>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top. We encourage you to review this Privacy Policy periodically for any changes.
            </p>
          </div>
        </article>
        <article >
          <h1 className='text-black mb-4 font-extrabold text-2xl'>9. Contact Us</h1>
          <div className='mb-6'>
            <p className=' mb-2 '>If you have any questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <div className=' mb-2 '>
              <p>Email: support@munii.finance </p>
              <p>
                Address:1397 Hakeem Agboola Crescent, Amuwo Odofin, Lagos, Nigeria
              </p>
            </div>
            <p className=' mb-2 '>
              By using Munii, you acknowledge that you have read and understood this Privacy Policy and
              agree to its terms.
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}

export default page