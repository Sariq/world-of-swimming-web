import Footer from "components/Footers/Footer";
import Navbar from "components/Navbars/AuthNavbar";
import React from "react";

const MarathonSwimming = () => {
  const sections = [
    {
      title: "سباحة 10 كم عبر بحيرة طبريا",
      content: `
        أصبحت السباحة الماراثونية في المياه المفتوحة تحظى باهتمام متزايد بين السباحين. 
        فالمسافات تتراوح بين الحد الأدنى 10 كم، وحتى مسافات عالمية قياسية تصل إلى 140 كم. 
        يمكن لكل سباح اختيار المسافة التي تناسب قدراته وأهدافه، وتتم السباحة الماراثونية 
        في البحر، البحيرات، الأنهار، الخلجان، وحتى القنوات المائية بين الدول.
      `,
      image: "/images/swimming-marathon/lake-tiberias.jpg",
    },
    {
      title: "خطة السباحة الماراثونية",
      content: `
        للمسافات الماراثونية، يجب وضع خطة واضحة ومسار محدد. والأهم هو الاستماع للجسد والعقل، 
        فالمسافات الطويلة تحتاج إلى إيمان قوي وإرادة ذهنية عظيمة للاستمرار، حيث تظهر لحظات 
        من الكسر والإرهاق، خصوصاً عند مواجهة عوامل أو تضاريس غير متوقعة. 
        كلما زادت المسافة، زاد التحضير لها وأصبحت أكثر تعقيدًا.
      `,
      image: "/images/swimming-marathon/planning.jpg",
    },
    {
      title: "تحديات السباحة الماراثونية",
      content: `
        يتعين على السباح بناء شبكة دعم قوية، لأن السباحة لتحقيق هدف معين ليست مجرد جهد فردي، 
        بل تتطلب مساندة الأشخاص المناسبين. وهناك قواعد صارمة يجب اتباعها للوصول إلى اللقب المنشود. 
        مسموح للسباح فقط بارتداء المايوه، النظارات، والقبعة. كذلك، يوجد مراقبون مختصون 
        للتأكد من أن السباح لا يتوقف أثناء التحدي (ولا يلامس أي جسم صلب)، ولا يتفاعل 
        مع الأشخاص المرافقين، أو يستخدم ساعات، أو يلمس سباحين آخرين.
      `,
      image: "/images/swimming-marathon/rules.jpg",
    },
    {
      title: "التحديات المشهورة في المياه المفتوحة",
      content: `
        تحدي التاج الثلاثي:
        - قناة المانش: بين بريطانيا وفرنسا (34 كم)
        - قناة كتالينا: من جزيرة سانتا كاتلينا إلى جنوب كاليفورنيا (32 كم)
        - إحاطة جزيرة مانهاتن في نيويورك (45.9 كم)

        تحدي المحيطات السبعة:
        - القناة الشمالية: بين إيرلندا واسكتلندا
        - مضيق كوك: بين الجزيرة الشمالية والجنوبية في نيوزيلندا
        - قناة مولوكاي: في هاواي
        - قناة المانش
        - قناة كتالينا
        - مضيق تسوغارو: بين جزيرتي هونشو وهوكايدو في اليابان
        - مضيق جبل طارق: بين أوروبا وأفريقيا
      `,
      image: "/images/swimming-marathon/challenges.jpg",
    },
    {
      title: "التجربة المحلية في بحيرة طبريا",
      content: `
        في البلاد، هناك تحدي ماراثوني وهو السباحة في بحيرة طبريا: 10 كم عرضها و20.5 كم طولها. 
        تتم جميع هذه التحديات بتنسيق وتسجيل مسبق، وليس بشكل عشوائي، حيث يتم تحديد موعد 
        محدد لكل تحدٍ نظرًا لتوافرها في أوقات معينة من السنة. تتم المرافقة بقارب متخصص 
        ولا يحتاج السباح للقيام بالملاحة، حيث يتولى القارب والمراقبون هذا الدور.
      `,
      image: "/images/swimming-marathon/lake-tiberias-boat.jpg",
    },
    {
      title: "النشوة بعد الإنجاز",
      content: `
        بعد إنجاز السباحة، يشعر السباح بقوة ونشوة إنجاز لا يمكن دائمًا وصفها، إذ يدرك 
        أنه اجتاز طريقًا مليئة بالتحديات والصعوبات، ولكنه في النهاية حقق النجاح بالرغم من كل شيء.
      `,
      image: "/images/swimming-marathon/success.jpg",
    },
  ];

  return (
    <>
      <div className="font-sans">
        {sections.map((section, index) => (
          <React.Fragment key={index}>
            {/* Content Section */}
            <section
              className={`py-16 px-8 bg-opacity-20 text-center ${
                index % 2 === 0 ? "bg-blueGray-200" : "bg-gray-100"
              }`}
            >
              <h2 className="text-4xl font-semibold mb-4">{section.title}</h2>
              <p className="text-lg leading-8 whitespace-pre-line">{section.content}</p>
            </section>

            {/* Parallax Image */}
            <div
              className="h-[50vh] bg-fixed bg-center bg-cover"
              style={{ backgroundImage: `url(${section.image})` }}
            ></div>
          </React.Fragment>
        ))}

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default MarathonSwimming;