git <template>
  <div class="bg-[url('/images/bg-vector.svg')] bg-cover bg-no-repeat">
    <div class="container">
      <div class="text-white pt-[120px] flex flex-col gap-6">
        <CBreadCrumb :routes="routes" />
        <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold">Privacy agreement</h2>
        <p class="text-sm md:text-base">
          At Tabarruk Ziyorat, we value and respect your privacy. This Privacy Policy outlines the
          types of personal information we collect, how we use and protect that information, and
          your rights regarding your personal data when you visit our website or use our services.
          By accessing or using Tabarruk Ziyorat, you consent to the practices described in this
          Privacy Policy.
        </p>
        <p class="text-sm md:text-base">
          Information We Collect: 1.1 <br />
          Personal Information: We may collect personal information, such as your name, email
          address, contact details, and other relevant information you provide to us voluntarily
          when you register, make a purchase, subscribe to our newsletter, or interact with our
          website. 1.2 Usage Information: We collect non-personal information about your
          interactions with our website, such as your IP address, browser type, operating system,
          device information, and pages visited. This information helps us analyze trends,
          administer the site, and improve user experience.
        </p>
        <p class="text-sm md:text-base">
          Use of Collected Information: <br />
          2.1 Providing Services: We use the collected information to deliver the services you
          request, such as processing bookings, providing customer support, and delivering relevant
          information about our products, promotions, and updates. 2.2 Improving User Experience: We
          may use information to personalize your experience, understand user preferences, optimize
          our website, and offer tailored content, recommendations, and advertisements based on your
          interests.
        </p>
        <p class="text-sm md:text-base">
          2.3 Communication: <br />
          We may contact you via email or other communication channels to respond to inquiries,
          provide assistance, or inform you about important updates, offers, and promotions related
          to Tabarruk Ziyorat. You have the option to unsubscribe from promotional communications at
          any time.
        </p>
        <p class="text-sm md:text-base">
          Data Sharing and Disclosure: <br />
          3.1 Third-Party Service Providers: We may engage trusted third-party service providers to
          perform certain functions on our behalf, such as processing payments, analyzing data, or
          delivering marketing communications. These providers have access to personal information
          solely for performing their tasks and must protect the data in compliance with applicable
          laws. 3.2 Legal Requirements: We may disclose personal information if required by law,
          regulation, legal process, or governmental request. We may also enforce our Terms of
          Service and investigate potential violations, fraud, or security concerns.
        </p>
        <p class="text-sm md:text-base">
          Data Security: <br />
          We take reasonable measures to protect your personal information from unauthorized access,
          disclosure, alteration, or destruction. However, please note that no method of
          transmission or storage over the internet is 100% secure. Therefore, we cannot guarantee
          absolute security of your data, and you provide information at your own risk.
        </p>
        <p class="text-sm md:text-base">
          Your Rights: <br />
          You have the right to access, update, correct, and delete your personal information held
          by Tabarruk Ziyorat. You can exercise these rights by contacting us using the contact
          details provided below. We will make reasonable efforts to respond to your requests
          promptly, subject to any legal obligations or legitimate interests.
        </p>
        <p class="text-sm md:text-base">
          Cookies and Tracking Technologies: <br />
          We use cookies and similar tracking technologies to enhance your browsing experience,
          analyze usage patterns, and collect statistical information. You can manage your cookie
          preferences through your browser settings, although disabling cookies may limit certain
          functionality on our website.
        </p>
        <p class="text-sm md:text-base">
          Links to Third-Party Websites: <br />
          Our website may contain links to external websites or services that are not operated or
          controlled by Tabarruk Ziyorat. This Privacy Policy does not cover the practices of these
          third-party websites, and we encourage you to review their respective privacy policies.
        </p>
        <p class="text-sm md:text-base">
          Children's Privacy: <br />
          Tabarruk Ziyorat does not knowingly collect or store personal information from individuals
          under the age of 18. If we become aware that we have collected personal information from a
          child without parental consent, we will take steps to remove that information from our
          systems.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CBreadCrumb from '@/components/Common/CBreadCrumb.vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const routes = computed(() => [
  {
    label: t('Privacy'),
    link: '/privacy'
  }
])
</script>
