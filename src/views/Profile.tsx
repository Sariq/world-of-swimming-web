import React from "react";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Profile() {
  return (
    <>
    
        <section className="relative block h-full md:-mt-72  pb-10 lg:pb-24">
        {/* <div className="z-10 absolute inset-x-0 shadow-xl  w-3/4 md:w-2/5  mx-auto pt-20 justify-center">
            <img
                    alt="..."
                    src="/icon.png"
                    className="align-middle rounded-t-lg h-40 self-center m-auto"
                  />
            </div>
          <div
            className="w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: "url('/images/profile/DSC03693.jpg')",
            }}
          >
         
          </div> */}
             {/* <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span> */}
  
          {/* <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div> */}

          <div className="container mx-auto px-4 ">
            <div className="relative flex flex-col min-w-0 break-words bg-blueGray-100 opacity-100 w-full mb-6 shadow-xl xs:shadow-pink	md:shadow-pink

   rounded-lg ">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src={"/images/profile/DSC02947.jpg"}
                        className="shadow-md  sm:shadow-pink rounded-full h-auto align-middle border-none  -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      />
                    </div>
                  </div>
                  {/* <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button
                        className="bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Connect
                      </button>
                    </div>
                  </div> */}
                  {/* <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          22
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Friends
                        </span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          10
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Photos
                        </span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          89
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Comments
                        </span>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="text-center mt-16">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    ريهام منصور
                  </h3>
                  {/* <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                    Los Angeles, California
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    Solution Manager - Creative Tim Officer
                  </div>
                  <div className="mb-2 text-blueGray-600">
                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                    University of Computer Science
                  </div> */}
                </div>
                <div className="mt-5 py-10 border-t border-blueGray-200 ">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        إسمي رهام منصور، من مدينة الطيرة. عمري 40 عامًا. أعيش مع
                        زوجي رامي، وابنتي لارا، وابني باسل في مدينة حيفا.
                      </p>
                      <p className="mb-4  text-lg leading-relaxed text-blueGray-700">
                        أنا سبّاحة منذ أن كنت في العاشرة من عمري وحتى يومنا هذا،
                        كما أنني صاحبة ومؤسسة مشروع "عالم السباحة". ولدت فكرة
                        مشروعي من خلال كوني السبّاحة العربية الوحيدة التي تشارك
                        في بطولات الماسترز، فقررت أن أغير هذا الواقع. بعد عناء
                        ومشقة استمرتا لمدة عام كامل من التحديات، وبعد أن أُغلقت
                        العديد من الأبواب في وجهي، وحاول الكثيرون التقليل من شأن
                        حلمي، قررت نشر فكرتي في مجموعة نسائية على فيسبوك بخصوص
                        إنشاء أول فريق نسائي عربي للسباحة. ومن هناك، فُتح لي باب
                        غيّر حياتي ويستمر في تغييرها حتى الآن.
                      </p>

                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        وهكذا، ورغم كل التحديات الكبيرة، أطلقت فكرة المشروع قبل
                        خمس سنوات مع ثلاث نساء. لم يروني شخصيًا، ولكنهم رأوا
                        حلمي وشغفي من بين السطور التي كتبتها ونشرتها. ومع مرور
                        الوقت، وبفضل العمل الجاد والصبر والإيمان بنفسي، ودعم
                        زوجي وأمي وأبي وإخوتي، ومدربي وزملائي السباحين، كبر
                        مشروعي من سنة إلى أخرى. واليوم، بدلاً من ثلاثة أعضاء،
                        أصبح لدي عشرات النساء في الفريق. في نفس الوقت، واصلت
                        المشاركة في البطولات والتحديات الجديدة، وفزت بميداليات
                        ذهبية في سباقات فردية وسباقات التتابع مع الفريق.
                      </p>
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        قبل عام، شاركت أنا واثنتان من السباحات لأول مرة في تاريخ
                        البلاد في ترياثلون التتابع في إيلات، حيث حصلنا على
                        المركز الثاني. وقبلها ببضعة أشهر، قطعت 10 كيلومترات عرض
                        بحيرة طبريا، لأصبح أول امرأة عربية تحقق هذا الإنجاز.
                      </p>
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        واليوم، لدينا فرعين: في مسبح الطيبة، ومسبح دبورية، وهناك
                        خطة لافتتاح فرع ثالث قريبًا. نمتلك اليوم أكبر فريق نسائي
                        في البلاد لتدريب النساء والفتيات فقط، بالإضافة إلى
                        مجموعات لتعليم السباحة ضمن فرق صغيرة. كما أننا في طور
                        التخطيط لأول مرة في البلاد لتشكيل مجموعات سباحة نسائية
                        في البحر.
                      </p>
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        أحلامي لم تنتهِ بعد، ففي كل يوم هناك خطط ومشاريع جديدة
                        تُطبخ على نار هادئة. حلمي أصبح اليوم حلم كل سبّاحة في
                        المشروع. التحديات مستمرة، بعضها كبير وبعضها صغير، لكنني
                        قطعت على نفسي عهدًا بأن تكون كل الأشياء من حولي مشبعة
                        بالطاقة الإيجابية، لأنها تدفعني بقوة نحو حياكة حلم جديد
                        وفتح طريق جديدة.
                      </p>
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        وأخيرًا، أود أن أشكر سباحاتي على ثقتهن ومحبتن ودعمهن
                        وانتمائهن للفريق. أحبكن من كل قلبي، أنتن عائلتي الثانية.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-100 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
        </section>
      {/* <Footer /> */}
    </>
  );
}
