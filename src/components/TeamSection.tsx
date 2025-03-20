import Image from 'next/image';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Artur Conrado',
      role: 'CTO & Co-fundadora',
      bio: 'Desenvolvedor full-stack com passagens por Bradesco e Maersk. Especialista em arquitetura de sistemas escaláveis.',
      linkedin: '#'
    },
    {
      name: 'Geovana Medeiros',
      role: 'CEO & Co-fundadora',
      bio: 'Ex-diretora de operações na Decolar.com. Especialista em turismo digital e gestão de equipes.',
      linkedin: '#'
    }
  ];

  const advisors = [
    {
      name: 'Ana Martins',
      role: 'Advisor de Negócios',
      bio: 'Investidora anjo com experiência em turismo digital. Ex-diretora de operações na Decolar.com.',
      linkedin: '#'
    },
    {
      name: 'Fernando Gomes',
      role: 'Advisor Técnico',
      bio: 'CTO de startup unicórnio brasileira. Especialista em escalabilidade e segurança de dados.',
      linkedin: '#'
    }
  ];

  return (
    <section id="team" className="section bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">A equipe por trás do RoadTrip</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Um time experiente e apaixonado por viagens, tecnologia e resolver problemas complexos.
        </p>
      </div>

      {/* Fundadores e time principal */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-8 text-center">Fundadores</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="card text-center group hover:border hover:border-blue-200">
              <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 text-3xl font-bold mx-auto mb-4">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h4 className="text-xl font-bold mb-1">{member.name}</h4>
              <p className="text-blue-600 mb-4">{member.role}</p>
              <p className="text-gray-600 mb-4">{member.bio}</p>
              <a 
                href={member.linkedin}
                className="inline-flex items-center text-blue-500 hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Advisors */}
      <div>
        <h3 className="text-2xl font-bold mb-8 text-center">Advisors</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {advisors.map((advisor, index) => (
            <div key={index} className="card text-center group hover:border hover:border-blue-200">
              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 text-2xl font-bold mx-auto mb-4">
                {advisor.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h4 className="text-xl font-bold mb-1">{advisor.name}</h4>
              <p className="text-blue-600 mb-4">{advisor.role}</p>
              <p className="text-gray-600 mb-4">{advisor.bio}</p>
              <a 
                href={advisor.linkedin}
                className="inline-flex items-center text-blue-500 hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
        <h3 className="text-xl font-bold mb-4">Por que investir em nossa equipe?</h3>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Nossa equipe combina expertise técnica, conhecimento de produto, e experiência em transformar startups em negócios de sucesso. 
          Além disso, somos apaixonados por viagens rodoviárias e entendemos profundamente as dores de nossos usuários.
        </p>
      </div>
    </section>
  );
};

export default TeamSection; 