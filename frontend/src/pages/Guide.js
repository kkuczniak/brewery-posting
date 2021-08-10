import './styles/Guide.css';
import brewIcons from '../images/guideImages/brew_icons.webp';
import step1 from '../images/guideImages/nb-how-to-brew-step-1.webp';
import step2 from '../images/guideImages/nb-how-to-brew-step-2.webp';
import step3 from '../images/guideImages/nb-how-to-brew-step-3.webp';
import step4 from '../images/guideImages/nb-how-to-brew-step-4.webp';
import step5 from '../images/guideImages/nb-how-to-brew-step-5.webp';

export default function Guide() {
  return (
    <div className='container'>
      <header className='guide'>
        <h2>THE 4 BASIC STEPS TO BREW YOUR BEER</h2>
        <img src={brewIcons} alt='brewicons' />
      </header>
      <section className='guide_steps'>
        <img src={step1} alt='prepare' />
        <h3>Step 1: Prepare</h3>
        <div className='guide_text'>
          <p>1. Gather your brewing equipment. You'll need:</p>
          <ul>
            <li>Brewing Kettle </li>
            <li>Fermenter + Air Lock</li>
            <li>Funnel (optional)</li>
            <li>Sanitizer</li>
            <li>Auto-Siphon</li>
            <li>Stir Spoon</li>
            <li>Beer Recipe Kit (or individual ingredients)</li>
          </ul>
          <p>
            If gathering all of that sounds like too much work, simply choose
            one of Northern Brewer's beer making kit that have everything you
            need to brew beer, all in one box.
          </p>
          <p>
            2. Sanitize, Sanitize, Sanitize. Your success will rely on how clean
            your equipment is. Anything that comes in contact with your beer
            after the boil process should be sanitized. PBW and Star San are
            great cleaners and santizers.
          </p>
        </div>
      </section>
      <section className='guide_steps'>
        <img src={step2} alt='brew' />
        <h3>Step 2: Brew</h3>
        <div className='guide_text'>
          <p>
            1. Steep Grains. Fill your 5-gallon brew kettle with 2.5 gallons of
            water. As you heat your water, steep your grains for 20 minutes, or
            until your water reaches 170 degrees. When you remove your grains,
            let the water drip out of the grain bag and into the kettle. Don't
            squeeze your grain bag as you don't want to extract tannins, which
            may give your beer unwanted flavors.
          </p>
          <p>
            2. Bring kettle to a boil - Once your kettle comes to a rolling boil
            remove it from heat and add malt extracts. Once the extract is
            dissolved return to a boil. Hops will now be added at various
            intervals. (Note: Be careful not to boil over when hops are added.)
            Refer to your exact recipe as to when you need to add hops to your
            boil.{' '}
          </p>
          <p>
            3. You now have wort - Otherwise known as sugar water. Cool your
            wort as quickly as possible. This can be done one of two ways:{' '}
          </p>
          <ul>
            <li>
              Ice Bath - Simply set your pot into a sink filled with ice water.
            </li>
            <li>
              Use a wort chiller - Insert chiller into your wort. Run cold water
              from your tap through the chiller and out to the sink. A wort
              chiller is the most effective way, but either will get you the
              desired results.
            </li>
          </ul>
        </div>
      </section>
      <section className='guide_steps'>
        <img src={step3} alt='ferment' />
        <h3>Step 3: Ferment</h3>
        <div className='guide_text'>
          <p>
            <strong>Don't forget to sanitize all your supplies!</strong> Then...
          </p>
          <p>
            1. Pour cooled wort into the fermenter. Some brew kettles even have
            a valve for easy transportation from your kettle to your fermenter.
          </p>
          <p>2. Add water to bring the level to 5 gallons.</p>
          <p>
            3. Aerate wort by splashing it around in its container. Yeast need
            oxygen, and splashing your wort will help.
          </p>
          <p>
            4. Add yeast. Dry yeast is the easiest, as you don't have to prepare
            it beforehand. Sanitize the yeast pack + scissors, cut the corner
            off the yeast pack, and pour the yeast into the fermenter.
          </p>
          <p>
            5. Seal your fermenter, add a fermentation air lock, and store in a
            dark cool place. Ales should stay at 68 degrees to ferment properly.
          </p>
        </div>
      </section>
      <section className='guide_steps'>
        <img src={step4} alt='botle' />
        <h3>Step 4: Bottling</h3>
        <div className='guide_text'>
          <p>
            After fermentation is complete, typically within two weeks, it's
            time to bottle your beer.
          </p>
          <p>
            1. Cleanse everything: bottles, bottle filler, bottle caps, bottling
            bucket, and any transfer hoses used. Use a bottle brush on your
            bottles.
          </p>
          <p>
            2. Boil your priming sugar in 16 oz of water. After it cools, add it
            directly to the bottling bucket.
          </p>
          <p>
            3. Transfer your beer. Siphon the beer out of your fermenter and
            into your bottling bucket. Leave as much sediment in the fermenter
            as possible.
          </p>
          <p>
            4. Fill the bottles. Attach bottle filler to hose, and hose to
            bottling bucket spigot. Open the bottling bucket spigot and push the
            bottle filler to the bottom of the bottle.
          </p>
          <p>5. Cap the bottles with caps and a bottle capper.</p>
          <p>
            6. Store the bottles at room temperature for roughly two weeks. This
            gives your beer time to carbonate.
          </p>
        </div>
      </section>
      <section className='guide_steps'>
        <img src={step5} alt='drink' />
        <h3>Step 5: Congratulations</h3>
        <div className='guide_text'>
          <p>You did it. You made beer. All that's left to do is..</p>
          <p>1. Refrigerate.</p>
          <p>2. Enjoy.</p>
        </div>
      </section>
    </div>
  );
}
