import * as React from 'react';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    '&::before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    borderRadius: '10px',
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .1)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(4),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '0px solid rgba(0, 0, 0, 0.250)',
  }));

function Services() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
  return (
    <div>
     <div className='container min-w-full py-4 px-10'>
      <div className='container mx-auto '>
        <h1 className='text-5xl font-bold py-5 text-center'>Services</h1>
        <div className='py-5'>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h4" component="h2">Vente & Installation</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          vente, installation, maintenance et entretien de climatiseurs offre des services complets pour assurer le confort et l'efficacité de vos systèmes de climatisation. Nous proposons une large gamme de climatiseurs, adaptés à tous les besoins et budgets, et nos techniciens qualifiés assurent une installation professionnelle et rapide. En plus de l'installation, nous prenons en charge la maintenance régulière de vos appareils, qu'ils soient réversibles ou non, en vérifiant et nettoyant les éléments clés comme les condenseurs, compresseurs, évaporateurs et filtres. Nous contrôlons également les pressostats, la régulation, les circuits de commande, et effectuons les recharges en réfrigérant nécessaires. Grâce à notre contrat de prestation de service, vous bénéficiez d'un suivi programmé, sans souci de prise de rendez-vous, garantissant ainsi la sécurité, le confort et l'efficacité de vos climatiseurs. Nous intervenons sur des appareils de toutes marques, avec une honnêteté et une satisfaction garanties.
          </Typography>
        </AccordionDetails>
      </Accordion>
    
     {/* <hr className='border-2 w-11/12 mx-auto border-blue-900'></hr> */}
     <div className='py-5'></div>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography variant="h4" component="h2">Entretien & maintenance</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            
Notre société spécialisée en maintenance et entretien de climatiseurs assure le bon fonctionnement de vos systèmes de climatisation tout au long de l'année. Nous prenons en charge tous les types de climatiseurs, qu'ils soient réversibles ou non, en effectuant des entretiens réguliers adaptés à chaque modèle. Nos techniciens qualifiés vérifient et nettoient les éléments clés tels que les condenseurs, compresseurs, évaporateurs et filtres. Ils contrôlent également les pressostats, la régulation et les circuits de commande, et effectuent les recharges en réfrigérant nécessaires. Grâce à notre contrat de prestation de service, vous bénéficiez d'un suivi programmé, sans souci de prise de rendez-vous, garantissant ainsi la sécurité, le confort et l'efficacité de vos appareils. Nous intervenons sur des climatiseurs de toutes marques, avec une honnêteté et une satisfaction garanties.
          </Typography>
        </AccordionDetails>
      </Accordion  >
      {/* <hr className='border-2 w-11/12 mx-auto border-blue-900'></hr> */}
      <div className='py-5'></div>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel3-content"
          id="panel3-header"

          
        >
          <Typography variant="h4" component="h5">Réparation</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Notre équipe de techniciens en chauffage et climatisation offre des services de réparation pour tous les modèles de climatiseurs, y compris les systèmes split, les cassettes, les armoires, les consoles et les gainables. Nous remplaçons les filtres à air et effectuons des réparations plus complexes, comme le remplacement de compresseurs défectueux. Nous installons et démontons également des climatiseurs portables de tous modèles et avons en stock de nombreuses pièces de rechange. Nos techniciens qualifiés identifient et réparent les problèmes de climatiseur, fournissant des devis précis incluant les coûts des pièces. Nous garantissons une honnêteté irréprochable et une satisfaction garantie pour toutes les réparations effectuées.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* <hr className='border-2 w-11/12 mx-auto border-blue-900'></hr> */}
    <div className='py-5'></div>
    </div>
      
      </div>
    </div>
    </div>
  )
}

export default Services