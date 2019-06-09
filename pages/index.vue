<template>
  <div>
    <first-view :title="title" :sub-title="subTitle" />
    <header-bar :title="title" />
    <message />
    <history />
    <services>
      <service
        v-for="service in services"
        :key="service.name"
        :name="service.name"
        :icon="service.icon"
        :description="service.description"
      />
    </services>
  </div>
</template>

<script>
import FirstView from '~/components/FirstView.vue'
import HeaderBar from '~/components/HeaderBar.vue'
import Message from '~/components/Message.vue'
import History from '~/components/History.vue'
import Services from '~/components/Services.vue'
import Service from '~/components/Services/Service.vue'

export default {
  components: {
    FirstView,
    HeaderBar,
    History,
    Message,
    Services,
    Service
  },

  data() {
    return {
      title: 'Kawamoto Yuto',
      subTitle: 'Maido O-kini',
      services: [
        {
          name: 'バックエンド開発',
          icon: 'server',
          description:
            'LAMPを用いた開発を得意としており、データベースの設計からAPI化まで幅広い業務を承ることが可能です。\n特に指定がない場合はLaravelを用いて開発を行うことが多いです。'
        },
        {
          name: 'フロントエンド開発',
          icon: 'tv',
          description:
            'HTML、CSSはもちろんVue、Reactといったデータバインディング機能を備えたライブラリを使用したモダンな開発に対応できます。\nDOM操作やアニメーションには極力jQueryなどを使わず、CSSやES2015以降の機能を積極的に取り入れています。'
        },
        {
          name: 'システム構築',
          icon: 'network-wired',
          description:
            'システム構築のコンサルティングも行なっています。\n既存のサービスの導入はもちろん、連携部分に独自のプログラムを組み込むことができるので、柔軟で汎用性の高いシステムを構築できます。'
        },
        {
          name: 'レガシーシステムの改修',
          icon: 'snowplow',
          description:
            '古いシステムを徐々に改修して、最新の技術を取り入れられる様にしていきます。\n既存のシステムのフレームワークへの載せ替えやテストコードの作成。GitやAWSなどの導入、Dockerによる環境構築などなど。\nソフトウェア系・インフラ系問わず柔軟に対応できます。'
        },
        {
          name: 'ABテスト',
          icon: 'vials',
          description:
            'フロントエンド系の案件で、SEOが重要になるものである場合、変更がどのような影響をもたらしたかABテストを実施することができます。\n常に改善を重ねビジネスを加速させることができます。'
        },
        {
          name: 'お片づけ',
          icon: 'broom',
          description:
            'LANケーブルや電源ケーブルの配線、オフィスや倉庫の業務フローを考えた整理整頓・レイアウトなどなど。\n綺麗なことはもちろん、実用性にフォーカスした整理整頓を行います。'
        }
      ]
    }
  }
}
</script>
